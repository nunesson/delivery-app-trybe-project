const express = require('express');
const registerRouter = require('./Register.router');

const routers = express.Router();

routers.use('/register', registerRouter);

module.exports = routers;