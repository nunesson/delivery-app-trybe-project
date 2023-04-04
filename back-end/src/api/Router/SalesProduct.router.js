const router = require('express').Router();
const salesProductController = require('../Controller/SalesProduct.controller');

 router.post('/', salesProductController.createSPController);

module.exports = router;