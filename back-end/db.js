const mysql = require('mysql');

const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'sehnsucht'
});
 
con.connect(err => {
  if (err) throw new Error(err);
  console.log('connected as id' + con.threadId);
});


module.exports = con;


