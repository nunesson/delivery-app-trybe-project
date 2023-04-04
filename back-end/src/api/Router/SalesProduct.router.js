const router = require('express').Router();
const salesProductController = require('../Controller/SalesProduct.controller');

 router.post('/', salesProductController.createSPController);
 router.get('/:id', salesProductController.findOrders);

module.exports = router;