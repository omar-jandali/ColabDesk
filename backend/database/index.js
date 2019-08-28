const postgres = require("pg")
const mysql = require("mysql")
const seq = require("sequelize")


require('dotenv').config();


const databaseConnection = new seq("colabdesk", "masteradmin", "Canyon286038", {
  "host":"localhost",
  "dialect":"postgres",
})


databaseConnection
  .authenticate()
  .then(() => {
    console.log("postgres database connected")
  })
  .catch((err) => {
    console.log("error with server")
    console.log(err)
  })


module.exports.postgres = databaseConnection;
