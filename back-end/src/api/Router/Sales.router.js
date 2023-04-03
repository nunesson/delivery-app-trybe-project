const router = require('express').Router();
const salesController = require('../Controller/Sales.controller');

 router.post('/', salesController.createSaleController);

module.exports = router;