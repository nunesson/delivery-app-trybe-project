const express = require('express');
const cors = require('cors');
const loginRouter = require('../routers/loginRouter');

// ...

const app = express();

app.use(express.json());
app.use(cors());

// ...
app.use('/login', loginRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
