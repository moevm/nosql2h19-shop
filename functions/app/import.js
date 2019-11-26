const express = require('express');
const router = express.Router();
const csv = require('csvtojson')

const adminInitializer = require('../firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();


router.post('/:collection', async (req, res) => {
  try {
    const collection = req.params.collection;
    console.log(collection)
    if(collection !== 'users' && collection !== 'accounts' && collection !== 'transactions'){
      res.json({status: 'error', error: 'Incorrect collection name'});
    }

    const result = await csv().fromString(req.body.toString());

    if (JSON.stringify(result) === '[]'){
      res.json({status: 'error', error: 'Input file is empty'});
    }

    if(collection === 'users'){
      for (const item of result){
        console.log()
        await firestore.collection(collection)
           .add({...item, accounts:[], spendings: 0, age: parseInt(item.age)})
      }
    }

    if(collection === 'accounts'){
      for (const item of result){
        console.log(generateNumberId())
        await firestore.collection(collection)
           .doc(generateNumberId().toString())
           .set({...item, transactions: [], money: parseInt(item.money)})
      }
    }
    if(collection === 'transactions'){
      for (const item of result){
        console.log(generateNumberId(6))

        const accountSnapshot = await firestore.collection('accounts')
           .doc(item.accountId)
           .get()
        const userId = accountSnapshot.data().userId

        await firestore.collection(collection)
           .doc(generateNumberId(6).toString())
           .set({
             ...item,
             userId,
             amount: parseInt(item.amount),
             created: new Date(parseInt(item.created))
           })
      }
    }

    return res.status(200).json({status: 'ok'});
  }
  catch (e) {
    console.log(e)
    return res.json({status: 'error', error: e});

  }
});

const generateNumberId = (n = 4) => {
  return Math.round(Math.random() * 10**n)
}

module.exports = router
