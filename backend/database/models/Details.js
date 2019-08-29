const seq = require('sequelize');
const { postgres } = require('../../index');
const { User } = require('./User');


const Detail = postgres.define(
    'detail',
    {
        id: {type: seq.INTEGER, primaryKey: true, autoincrement: true},
        phone: {type: seq.STRING, require: true, unique: true, 
               validate: {isAlphanumber: true, allowNull: false}
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
);


Detail.belongsTo(User)


postgres.syn()
    .then(() => {
        console.log('Detail table is not connected and synced');
    })
    .catch((err) => {
        console.log('Error syncing the Detail table: ' + JSON.stringify(err));
    })


module.exports.Detail = Detail;