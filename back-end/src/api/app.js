const cors = require('cors');
const express = require('express');
const { error } = require('./Middlewares/Error');
const routers = require('./Router/Router');

const app = express();

app.use(express.json());

app.use(cors());

app.use(routers);

app.use(error);

app.use(express.json());

module.exports = app;
