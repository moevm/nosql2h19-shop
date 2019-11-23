const express = require('express');
const functions = require('firebase-functions');
const app = express();

app.use('/users', require('./users'))
app.use('/user', require('./user'))
app.use('/transactions', require('./transactions'))
app.use('/stat/all-time', require('./stat_all-time'))
app.use('/stat/period', require('./stat_period'))

module.exports = functions.https.onRequest(app);
