const seq = require('sequelize');
const { postgres } = require('../index');


const Reservation = postgres.define(
    'reservation',
    {
        id: {type: seq.INTEGER, primaryKey: true, autoincrement: true},
        start: {type: seq.DATE, required: true, 
                validate: {isDate: true, allowNull: false}
        },
        end: {type: seq.DATE, required: true, 
              validate: {isDate: true, allowNull: false}
        },
        amount: {type: seq.FLOAT(9, 2), require: true, 
                 validate: {isFloat: true, allowNull: false}
        },
    },
    {
        createdAt: seq.DATE,
        updatedAt: seq.DATE
    }
)


postgres.sync()
    .then(() => {
        console.log("Reservation table is connected and synced")
    })
    .catch((err) => {
        console.log("Error syncing the Reservation table: " + JSON.stringify(err))
    })


module.exports.Reservation = Reservation;