const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : '180.179.170.104',
  user     : 'idfc_survey',
  password : 'idfc_survey',
  database : 'idfc_survey'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection

