const express = require('express');
const connectDB = require('./database');
const routes = require('../routes/index');

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

module.exports = app;