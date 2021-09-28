const mysql = require('mysql');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: '54.38.50.59',
  user: 'www6880_download',
  password: 'c3jzNKlm3PCGv4y8Y4nH',
  database: 'www6880_download',
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.query('SELECT * FROM authors', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
});

function essa() {
  con.query(
  'UPDATE authors SET Ilosc = ? ',
  ['1', 3],
  (err, result) => {
    if (err) throw err;

    console.log(`Changed ${result.changedRows} row(s)`);
  }
);


  /*con.query('UPDATE authors SET Ilosc = 1')

 (err, result) => {
    if (err) throw err;

    console.log(`Changed ${result.changedRows} row(s)`);*/
};