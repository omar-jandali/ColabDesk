const seq = require('sequelize');
const { Postgres } = require('../../index');


const Office = Postgres.define(
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
        state: {type: seq.STRING, require: true, validate: 
                {isIn: stateCodes, isAlpha: true, allowNull: false}
        },
        country: {type: seq.STRING, require: true, 
                  validate: {isIn: [['United States']], isAlpha: true, allowNull: true}
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


postgres.sync()
    .then(() => {
        console.log("Office table is connected and synced")
    })
    .catch((err) => {
        console.log("Error syncing the Office table: " + JSON.stringify(err))
    })


module.exports.Office = Office;