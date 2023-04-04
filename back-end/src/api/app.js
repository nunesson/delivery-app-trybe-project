const cors = require('cors');
const express = require('express');
const { error } = require('./Middlewares/Error');
const routers = require('./Router/Router');

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use(cors());

app.use(routers);

app.use(error);

module.exports = app;
