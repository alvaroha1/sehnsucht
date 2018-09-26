
const con = require('../db');

exports.getAllStocks = () => {
  return new Promise((resolve, reject) => {
    con.query('SELECT * FROM stocks', function (error, result) {
      if (error) reject(error);
      resolve(result);
    });
    console.log('reading db');
  });
};

exports.postNewStockInvestment = function (newStockInvestment) {
  con.query('INSERT INTO STOCKS (STOCKID, SYMBOL, COMPANYNAME, PRICE, QUANTITY, VALUE, TIMESTAMP, DELETEID) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
  [ 
    newStockInvestment.stockid, 
    newStockInvestment.symbol, 
    newStockInvestment.companyName, 
    newStockInvestment.price, 
    newStockInvestment.quantity, 
    newStockInvestment.value, 
    newStockInvestment.timeStamp,
    newStockInvestment.deleteId
  ] ,
  (error) => {
    if (error) throw error;
    console.log('saved db');
  });
}; 
//CRYPTO

exports.getAllCryptos = () => {
  return new Promise((resolve, reject) => {
    con.query('SELECT * FROM cryptos', function (error, result) {
      if (error) reject(error);
      resolve(result);
    });
    console.log('reading db');
  });
};

exports.postNewCryptoInvestment = function (newCryptoInvestment) {
  con.query('INSERT INTO cryptos (STOCKID, SYMBOL, COMPANYNAME, PRICE, QUANTITY, VALUE, TIMESTAMP, DELETEID) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
  [ 
    newCryptoInvestment.stockid, 
    newCryptoInvestment.symbol, 
    newCryptoInvestment.companyName, 
    newCryptoInvestment.price, 
    newCryptoInvestment.quantity, 
    newCryptoInvestment.value, 
    newCryptoInvestment.timeStamp,
    newCryptoInvestment.deleteId
  ] ,
  (error) => {
    if (error) throw error;
    console.log('saved db');
  });
}; 

//ALLES
exports.getEverything = () => {
  return new Promise((resolve, reject) => {
    con.query('SELECT * from stocks UNION SELECT * from cryptos', function (error, result) {
      if (error) reject(error);
      resolve(result);
    });
    console.log('reading db');
  });
};

//DELETE
exports.delete = function (deleteId) {
  con.query(`DELETE FROM stocks WHERE deleteId = "${deleteId}"`, function (error, results, fields) {
    if (error) throw error;
    console.log('deleted ' + results.affectedRows + ' rows');
  })
  con.query(`DELETE FROM cryptos WHERE deleteId = "${deleteId}"`, function (error, results, fields) {
    if (error) throw error;
    console.log('deleted ' + results.affectedRows + ' rows');
  })
}; 


// CREATE TABLE Stocks (
//       stockid int,
//       symbol varchar(255),
//       companyName varchar(255),
//       price int,
//       quantity int,
//       value int,
//       timeStamp varchar(255),
//       deleteId varchar(255)
//   );
  
// CREATE TABLE Cryptos (
//     stockid int,
//     symbol varchar(255),
//     companyName varchar(255),
//     price int,
//     quantity int,
//     value int,
//     timeStamp varchar(255),
//     deleteId varchar(255)
// );

// Select * from Stocks Union Select * from Cryptos;


// connection.query('DELETE FROM posts WHERE title = "wrong"', function (error, results, fields) {
//   if (error) throw error;
//   console.log('deleted ' + results.affectedRows + ' rows');
// })

// DELETE FROM cryptos WHERE symbol = "AAPL";