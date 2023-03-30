const express = require('express');
const cors = require('cors');
const { aproveUsers } = require('../database/controller/login.controller');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/login', aproveUsers);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
