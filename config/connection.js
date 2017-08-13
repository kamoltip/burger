// Set up MySQL connection.
var mysql = require("mysql");
var key = require("./key.js");


var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL); // hoisting
} else{
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: key.password,
    database: 'burger_db'
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  
  // connected!
});


// Export connection for our ORM to use.
module.exports = connection;
