const seq = require('sequelize');
const { postgres } = require('../index');


const permissions = [['Admin', 'Staff', 'User']];


const User = postgres.define(
    "user",
    {
        id: {type: seq.INTEGER, primaryKey: true, autoIncrement: true},
        username: {type: seq.STRING, unique: true, require: true, 
                validate: {isAlphanumeric: true, len:  [8,16]}
        },
        password: {type: seq.STRING, require: true,
                  validate: {len: [8, 18]}          
        },
        email: {type: seq.STRING, unique: true, require: true, 
               validate: {isEmail: true}
        },
        first_name: {type: seq.STRING, require: true,
                    validate: {isAlpha: true}
        },
        last_name: {type: seq.STRING, require: true,
                    validate: {isAlpha: true,}
        },
        permission: {type: seq.STRING, require: true, 
               validate: {isAlpha: true, isIn: permissions}
        },
        renter: {type: seq.BOOLEAN, require: true, defaultValue: false,
                    validate: {isIn: [['0', '1']], isInt: true}
        },
        rentee: {type: seq.BOOLEAN, require: true, defaultValue: false,
                    validate: {isIn: [['0', '1']], isInt: true}
        },
    },
    {
        createdAt:  seq.DATE,
        updatedAt:  seq.DATE,
    }
);


postgres.sync()
    .then(() => {
        console.log("User table is connected and synced")
    })
    .catch((err) => {
        console.log("Error syncing the User table: " + JSON.stringify(err))
    })


module.exports.User = User;