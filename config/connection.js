const mysql = require("mysql2");
require('dotenv').config()
// console.log(process.env);

const db = mysql.createConnection({
  host: "localhost",
  // Your username
  user: process.env.DB_USER,
  
  // Your password
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
