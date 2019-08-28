const seq = require('sequelize');
const { postgres } = require('../../index');


const User = postgres.define(
    "user",
    {
        id: {type: seq.INTEGER, primaryKey: true, autoincremet: true},
        username: {type: seq.STRING, unique: true, require: true, 
                validate: {isAlphanumeric: true, allowNull: false, len:  [8,16]}
        },
        password: {type: seq.STRING, require: true,
                  validate: {allowNull: false, len: [8, 18]}          
        },
        email: {type: seq.STRING, unique: true, require: true, 
               validate: {isEmail: true, sllowNull: false}
        },
        first_name: {type: seq.STRING, require: true,
                    validate: {isAlpha: true, allowNull: false, len: [8,16]}
        },
        last_name: {type: seq.STRING, require: true,
                    validate: {isAlpha: true, allowNull: false, len: [8,16]}
        }
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