const seq = require('sequelize');
const { postgres } = require('../index');
const { Space } = require('./Space');
const { Images } = require('./Images')


const stateCodes = [[
 'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
 'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
 'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
 'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
 'VT','VI','VA','WA','WV','WI','WY'
]]


const Office = postgres.define(
    'office',
    {
        id: {type: seq.INTEGER, primaryKey: true, autoincrement: true},
        slug: {type: seq.STRING, require: true, 
               validate: {isAlphanumeric: true, allowNull: false}
        },
        description: {type: seq.TEXT, require: true, 
                      validate: {isAlphanumeri: true, allowNull: false}
        },
        street: {type: seq.STRING, require: true, 
                 validate: {isAlphanumeric: true, allowNull: false}
        },
        city: {type: seq.STRING, require: true, 
               validate: {isAlpha: true, allowNull: false}
            
        },
        state: {type: seq.STRING, require: true, 
                validate: {isIn: stateCodes, isAlpha: true, allowNull: false}
        },
        country: {type: seq.STRING, require: true, 
                  validate: {isIn: [['United States']], isAlpha: true, allowNull: false}
        },
        zip: {type: seq.INTEGER, required: true, 
              validate: {isNumeric: true, allowNull: false, len: [5, 9]}
        },
    },
    {
        createdAt: seq.DATE,
        updatedAt: seq.DATE
    }
)


Office.hasMany(Space, {as: 'spaceId'})
Office.hasMany(Images, {as: 'imagesId'})


postgres.sync()
    .then(() => {
        console.log("Office table is connected and synced")
    })
    .catch((err) => {
        console.log("Error syncing the Office table: " + JSON.stringify(err))
    })


module.exports.Office = Office;