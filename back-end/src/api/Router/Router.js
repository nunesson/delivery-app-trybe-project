const express = require('express');
const registerRouter = require('./Register.router');
const loginRouter = require('./Login.router');
const productsRouter = require('./products.router');
const usersRouter = require('./Users.router');
const salesRouter = require('./Sales.router');
const salesProductRouter = require('./SalesProduct.router');

const routers = express.Router();

routers.use('/register', registerRouter);
routers.use('/login', loginRouter);
routers.use('/products', productsRouter);
routers.use('/seller', usersRouter);
routers.use('/sales', salesRouter);
routers.use('/sales/products', salesProductRouter);

module.exports = routers;