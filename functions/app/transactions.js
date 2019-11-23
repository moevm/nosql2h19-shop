const express = require('express');
const router = express.Router();

const adminInitializer = require('../firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();


router.post('/', (req, res) => {
  console.log('get user transaction');
  firestore.collection('transactions')
     .where('userId', '==', req.body.id)
     .get()
     .then(snapshot => {
       let items = [];
       snapshot.docs.forEach(doc => {
         items.push({...doc.data(), id: doc.id});
       });
       return items
     }).then(transactions => {
    res.json({transactions});
  })
});

module.exports = router
