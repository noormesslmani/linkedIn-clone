const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "LinkedIndb"
})

module.exports = db;