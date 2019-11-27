const express = require('express');
const functions = require('firebase-functions');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

router.use('/users', require('./users'))
router.use('/user', require('./user'))
router.use('/transactions', require('./transactions'))
router.use('/transaction', require('./transaction'))
router.use('/stat/all-time', require('./stat_all-time'))
router.use('/stat/period', require('./stat_period'))

router.use('/import', require('./import'))

app.use('/api', router);

module.exports = functions.https.onRequest(app);
