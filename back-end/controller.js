const stocks = require('./model/stock');

exports.getAllStocks = async (req, res) => {
  const obj = await stocks.getAllStocks()
  res.status(200).json(obj);
};

exports.postNewStockInvestment = (req, res) => {
  stocks.postNewStockInvestment(req.body);
  res.sendStatus(200);
};

exports.getAllCryptos = async (req, res) => {
  const obj = await stocks.getAllCryptos()
  res.status(200).json(obj);
};

exports.postNewCryptoInvestment = (req, res) => {
  stocks.postNewCryptoInvestment(req.body);
  res.sendStatus(200);
};

exports.getEverything = async (req, res) => {
  const obj = await stocks.getEverything()
  res.status(200).json(obj);
};

exports.delete = async (req, res) => {
  const obj = await stocks.delete(req.body.deleteId)
  res.status(200).json(obj);
};