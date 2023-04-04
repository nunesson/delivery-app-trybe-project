const router = require('express').Router();
const userController = require('../Controller/Users.controller');

 router.get('/', userController.verifySellerController);
 router.get('/users', userController.getAllUsers);

module.exports = router;