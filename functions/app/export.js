const express = require('express');
const router = express.Router();

const adminInitializer = require('../firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();

router.post('/', async (req, res) => {
  try {
    const {collection} = req.body

    if (collection !== 'users' && collection !== 'transactions') {
      res.json({status: 'error', error: 'Incorrect collection name'});
    }

    if (collection === 'users') {
      firestore.collection('users')
         .get()
         .then(snapshot => {
           let items = [];
           snapshot.docs.forEach(doc => {
             items.push({...doc.data(), id: doc.id});
           });
           return items
         }).then(users => {
        res.json(users);
      })
    }

    if (collection === 'transactions') {
      const {id} = req.body

      const userSnapshot = await firestore.collection('users')
         .doc(id)
         .get()

      const {accounts} = userSnapshot.data()
      let items = [];

      for (const accountId of accounts) {
        const transactionsSnapshot = await firestore.collection('transactions')
           .where('accountId', '==', accountId).get()

        transactionsSnapshot.docs.forEach(doc => {
          items.push({...doc.data(), id: doc.id});
        });
      }

      res.json(items);
    }
  }
  catch(e) {
      console.log(e)
      return res.json({status: 'error', error: e});
    }
})

module.exports = router
