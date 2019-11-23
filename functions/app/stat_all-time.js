const express = require('express');
const router = express.Router();

const adminInitializer = require('../firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();


router.post('/', (req, res) => {
  firestore.collection('transactions')
     .where('userId', '==', req.body.id)
     .get()
     .then(snapshot => {
        let categories = {}
        snapshot.forEach(doc => {
          let category = doc.data().category
          categories[category] = categories[category] ? categories[category] : 0;
          categories[category] += 1
        })
       return Object.entries(categories)
     }).then(categories => {
    res.json({categories});
  })
});

module.exports = router
