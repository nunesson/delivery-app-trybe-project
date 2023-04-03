const router = require('express').Router();
const userController = require('../Controller/Users.controller');

 router.get('/', userController.verifySellerController);

module.exports = router;