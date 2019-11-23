const express = require('express');
const router = express.Router();

const adminInitializer = require('../firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();


router.post('/', (req, res) => {
  console.log('get user');
  console.log(req.body.id)

  firestore.collection('users')
     .doc(req.body.id)
     .get()
     .then(doc => {
       const user = {...doc.data(), id: doc.id }
      res.json({user})
  })
});

module.exports = router
