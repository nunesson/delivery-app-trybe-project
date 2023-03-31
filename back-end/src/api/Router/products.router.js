const router = require('express').Router();
const productsController = require('../Controller/Products.controller');

 router.get('/', productsController.findAll);

module.exports = router;