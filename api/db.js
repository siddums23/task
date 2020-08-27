var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
    user: "root",
    password: "admin",
    database: "database1"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected!');
});

module.exports = connection;