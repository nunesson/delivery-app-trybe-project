const router = require('express').Router();
const salesController = require('../Controller/Sales.controller');

 router.post('/', salesController.createSaleController);
 router.get('/', salesController.findAll);
 router.get('/:id', salesController.findOneSale);
 router.put('/orders/:id', salesController.updateSale);

module.exports = router;