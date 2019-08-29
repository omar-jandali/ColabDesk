const seq = require('sequelize');
const { Postgres } = require('../../index');


const Reservation = Postgres.define(
    'reservation',
    {
        id: {type: seq.INTEGER, primaryKey: true, autoincrement: true},
        start: {type: seq.DATE, required: true, 
                validate: {isDate: true, notNull: true}
        },
        end: {type: seq.DATE, required: true, 
              validate: {isDate: true, notNull: true}
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