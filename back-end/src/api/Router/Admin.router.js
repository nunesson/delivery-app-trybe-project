const router = require('express').Router();
const adminController = require('../Controller/Admin.controller');

router.post('/', adminController.register);

module.exports = router;
