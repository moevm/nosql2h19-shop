const express = require('express');
const router = express.Router();

const adminInitializer = require('../firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();


router.post('/', async (req, res) => {
  try {
    let categories = {};

    let transactionsSnapshot = await firestore.collection('transactions')
       .get()

    transactionsSnapshot.docs.forEach(doc => {
      const {category} = doc.data()

      categories[category] = categories[category] ? categories[category] : 0;
    });

    const result = {
      categories: Object.keys(categories)
    }

    res.json(result);
  }
  catch(e) {
    console.log(e)
    return res.json({status: 'error', error: e});
  }
});

module.exports = router
