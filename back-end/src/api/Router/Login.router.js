const router = require('express').Router();
const loginController = require('../Controller/Login.controller');

router.post('/', loginController.aproveUsers);

module.exports = router;
