const seq = require('sequelize');
const { Postgres } = require('../../index');


const Space = Postgres.define(
    'space',
    {
        id: {type: seq.INTEGER, primaryKey: true, autoincrement: true},
        size: {type: seq.INTEGER, require: true, 
               validate: {isNumeric: true, allowNull: false}
        },
        amount: {type: seq.FLOAT(9, 2), require: true, 
                 validate: {isFloat: true, allowNull: false}
        },
        floor: {type: seq.INTEGER, require: true, 
                validate: {isNumeric: true, allowNull: false}
        },
        available: {type: seq.BOOLEAN, require: true, defaultValue: 1,
                    validate: {isIn: [[0, 1]], isInt: true, allowNull: false}
        }
    },
    {
        createAt: seq.DATE,
        updatedAt: seq.DATE
    }
)


postgres.sync()
    .then(() => {
        console.log("Space table is connected and synced")
    })
    .catch((err) => {
        console.log("Error syncing the Space table: " + JSON.stringify(err))
    })


module.exports.Space = Space;