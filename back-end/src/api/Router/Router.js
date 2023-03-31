const express = require('express');
const registerRouter = require('./Register.router');
const loginRouter = require('./Login.router');
const productsRouter = require('./products.router');

const routers = express.Router();

routers.use('/register', registerRouter);
routers.use('/login', loginRouter);
routers.use('/products', productsRouter);

module.exports = routers;