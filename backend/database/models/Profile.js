const seq = require('sequelize');
const { postgres } = require('../index');
const { User } = require('./User');


const Profile = postgres.define(
    'profile',
    {
        id: {type: seq.INTEGER, primaryKey: true, autoincrement: true},
        bio: {type: seq.TEXT,
              validate: {isAlphanumber: true, allowNull: false}
        },
        company: {type: seq.STRING, require: true, 
                  validate: {isAlphanumeric: true, allowNull: true}
        },
        title: {type: seq.STRING, require: true, 
                validate: {isAlphanumeric: true, allowNull: false}
            
        },
        freelance: {type: seq.BOOLEAN, require: true, defaultValue: false,
                    validate: {isIn: [['0', '1']], isInt: true, allowNull: false}
        },
        remote: {type: seq.BOOLEAN, require: true, defaultValue: false,
                 validate: {isIn: [['0', '1']], isInt: true, allowNull: false}
        },
        linkedin: {type: seq.STRING, required: true, 
                   validate: {isUrl: true, allowNull: true}
        },
        website: {type: seq.STRING, required: true, 
                  validate: {isUrl: true, allowNull: true}
        },
    },
    {
        createdAt: seq.DATE,
        updatedAt: seq.DATE
    }
);


Profile.belongsTo(User);


postgres.sync()
    .then(() => {
        console.log('Profile table is not connected and synced');
    })
    .catch((err) => {
        console.log('Error syncing the Profile table: ' + JSON.stringify(err));
    })


module.exports.Profile = Profile;