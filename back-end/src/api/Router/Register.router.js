const router = require('express').Router();
const registerController = require('../Controller/Register.controller');

 router.post('/', registerController.register);

module.exports = router;