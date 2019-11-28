const express = require('express');
const router = express.Router();
const csv = require('csvtojson')

const adminInitializer = require('../firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();


router.post('/:collection', async (req, res) => {
  try {
    const collection = req.params.collection;
    if(collection !== 'users' && collection !== 'accounts' && collection !== 'transactions'){
      res.json({status: 'error', error: 'Incorrect collection name'});
    }

    const result = await csv().fromString(req.body.toString());

    console.log(result)
    if (JSON.stringify(result) === '[]'){
      res.json({status: 'error', error: 'Input file is empty'});
    }

    if(collection === 'users'){
      for (const item of result){
        const {name, sex} = item
        const accounts = JSON.parse(item.accounts).map(acc => `${acc}`)
        const age = parseInt(item.age)
        console.log(accounts)
        const userRef = await firestore.collection(collection)
           .add({
             name,
             sex,
             accounts,
             spendings: 0,
             age
           })

        const userId = userRef.id

        for (const accId of accounts){
          await firestore.collection('accounts')
             .doc(accId.toString())
             .set({
               money: 50000,
               transactions: [],
               userId
             })
        }
      }
    }

    if(collection === 'transactions'){
      for (const item of result){
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
