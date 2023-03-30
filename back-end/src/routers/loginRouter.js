const express = require('express');
const loginController = require('../controller/login.Controller');

const routers = express.Router();

routers.post('/', loginController);

module.exports = routers;