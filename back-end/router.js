
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/stocks', controller.getAllStocks)
router.post('/stocks', controller.postNewStockInvestment)

router.get('/cryptos', controller.getAllCryptos)
router.post('/cryptos', controller.postNewCryptoInvestment)

router.get('/alles', controller.getEverything)
router.delete('/delete', controller.delete)

module.exports = router;