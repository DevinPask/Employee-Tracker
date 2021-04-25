const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'R2d2C3p0',
      database: 'employeesDB'
    },
    console.log('Connected to the employeesDB database.')
  );

  module.exports = db;