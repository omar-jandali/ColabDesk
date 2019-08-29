const seq = require('sequelize');
const { Postgres } = require('../../index');


const Images = Postgres.define(
    'images',
    {
        id: {type: seq.INTEGER, primaryKey: true, autoincrement: true},
        image: {type: seq.FLOAT(9, 2), require: true, 
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
        console.log("Images table is connected and synced")
    })
    .catch((err) => {
        console.log("Error syncing the Images table: " + JSON.stringify(err))
    })


module.exports.Images = Images;