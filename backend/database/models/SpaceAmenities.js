const seq = require('sequelize');
const { Postgres } = require('../../index');


const SpaceAmenities = Postgres.define(
    'space_amenities',
    {
        id: {type: seq.INTEGER, primaryKey: true, autoincrement: true},
    },
    {
        createAt: seq.DATE,
        updatedAt: seq.DATE
    }
)


postgres.sync()
    .then(() => {
        console.log("Space_Amenities table is connected and synced")
    })
    .catch((err) => {
        console.log("Error syncing the Space_Amenities table: " + JSON.stringify(err))
    })


module.exports.SpaceAmenities = SpaceAmenities;