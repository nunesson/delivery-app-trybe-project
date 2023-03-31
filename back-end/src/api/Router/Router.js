const express = require('express');
const registerRouter = require('./Register.router');
const loginRouter = require('./Login.router');

const routers = express.Router();

routers.use('/register', registerRouter);
routers.use('/login', loginRouter);

module.exports = routers;