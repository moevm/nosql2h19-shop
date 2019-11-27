const express = require('express');
const router = express.Router();

const adminInitializer = require('../firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();


router.post('/', (req, res) => {
  firestore.collection('transactions')
     .doc(req.body.id)
     .get()
     .then(doc => {
       const transaction = {...doc.data(), id: doc.id }
       res.json({transaction})
     })
});

module.exports = router
