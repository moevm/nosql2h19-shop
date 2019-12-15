const express = require('express');
const router = express.Router();

const adminInitializer = require('../firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();


router.post('/', async (req, res) => {
  const {id, startDate, endDate, categories} = req.body

  const userSnapshot = await firestore.collection('users')
     .doc(id)
     .get()

  const { accounts } = userSnapshot.data()
  let items = [];

  for (const accountId of accounts){
    let userTransactionsRef = firestore.collection('transactions')
       .where('accountId', '==', accountId)

    if(startDate){
      const date = new Date(startDate)

      userTransactionsRef = userTransactionsRef
         .where('created', '>=', date)
    }

    if(endDate){
      const date = new Date(endDate)

      userTransactionsRef = userTransactionsRef
         .where('created', '<=', date)
    }

    if(categories){
      console.log('category')
      userTransactionsRef = userTransactionsRef
         .where('category', 'in', categories)
    }

    const transactionsSnapshot = await userTransactionsRef.get()

    transactionsSnapshot.docs.forEach(doc => {
     items.push({...doc.data(), id: doc.id});
    });
  }

  res.json({transactions: items});
});

module.exports = router
