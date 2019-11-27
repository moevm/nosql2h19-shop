const express = require('express');
const router = express.Router();

const adminInitializer = require('../firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();


router.post('/', async (req, res) => {
  const userSnapshot = await firestore.collection('users')
     .doc(req.body.id)
     .get()

  const { accounts } = userSnapshot.data()
  let items = [];

  for (const accountId of accounts){
    const transactionsSnapshot = await firestore.collection('transactions')
       .where('accountId', '==', accountId)
       .get()

    transactionsSnapshot.docs.forEach(doc => {
     items.push({...doc.data(), id: doc.id});
    });
  }

  res.json({transactions: items});
});

module.exports = router
