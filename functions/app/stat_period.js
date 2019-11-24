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
       console.log( req.body.startDate, req.body.endDate)
       let categories = {}
       snapshot.forEach(doc => {
         const category = doc.data().category
         const created = doc.data().created.seconds * 1000
         console.log(created)
         if (created >= req.body.startDate && created <= req.body.endDate){
           categories[category] = categories[category] ? categories[category] : 0;
           categories[category] += 1
         }
       })
       return Object
          .entries(categories)
          .map(categoryItem => ({category: categoryItem[0], quantity: categoryItem[1]}))
     }).then(categories => {
    res.json({categories});
  })
});

module.exports = router
