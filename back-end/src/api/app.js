const cors = require('cors');
const express = require('express');
const { error } = require('./Middlewares/Error');
const routers = require('./Router/Router');
const { aproveUsers } = require('../database/controller/login.controller');

const app = express();
app.use(express.json());
app.use(cors());

app.use(routers);
app.use(error);

app.use(cors());

app.use(express.json());

app.post('/login', aproveUsers);

module.exports = app;
