const express = require('express');
const cors = require('cors');
const logger = require("morgan");
require('dotenv').config();

const routerApi = require('./api');

const app = express();
app.use(express.json());
app.use(cors);

app.use('/api/orders', routerApi);

app.use((_, res, __) => {
    res.status(404).json({
        status: 'error', 
        code: 404, 
        message: 'Use api on routes: /api/orders', 
        data: 'Not found',});
});

app.use((err, _, res, __) => {
    console.log(err.stack);
    res.status(500).json({
        status: 'fail',
        code: 500,
        message: err.message,
        data: 'Internal Server Error',
    });
});

module.exports = app;