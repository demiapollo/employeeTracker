const mysql = require("mysql2");
require("dotenv").config();

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3001,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employee_db",
  },
  console.log("Connected to the employee_db database.")
);

module.exports = db;