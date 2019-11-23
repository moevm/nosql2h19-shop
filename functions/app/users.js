const express = require('express');
const router = express.Router();

const adminInitializer = require('../firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();


router.get('/', (req, res) => {
  console.log('get users');
  firestore.collection('users')
     .get()
     .then(snapshot => {
       let items = [];
       snapshot.docs.forEach(doc => {
         items.push({...doc.data(), id: doc.id});
       });
       return items
     }).then(users => {
    res.json({users});
  })
});

module.exports = router
