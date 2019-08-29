const seq = require('sequelize');
const { Postgres } = require('../../index');
const { SpaceAmenities } = require('./SpaceAmenities');


const Amenities = Postgres.define(
    'amenities',
    {
        id: {type: seq.INTEGER, primaryKey: true, autoincrement: true},
        item: {type: seq.STRING, require: true, 
               validate: {isAlpha: true, notNull: false}
        }
    },
    {
        createdAt: seq.DATE,
        updatedAt: seq.DATE
    }
)


Amenities.hasMany(SpaceAmenities, {as: 'spaceAmenitiesId'})


postgres.sync()
    .then(() => {
        console.log("Amenities table is connected and synced")
    })
    .catch((err) => {
        console.log("Error syncing the Amenities table: " + JSON.stringify(err))
    })


module.exports.Amenities = Amenities;