const express = require('express');
const router = express.Router();

const adminInitializer = require('../firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();


router.post('/', async (req, res) => {
  try {
    const { startDate, endDate } = req.body

    if(!startDate && !endDate){
      return res.json({status: 'error', error: 'startDate and endADate cannot be undefined both'});
    }

    const userSnapshots = await firestore.collection('users')
       .get()

    const accounts = userSnapshots.docs.reduce((accounts, doc) => [...accounts, ...doc.data().accounts], [])


    const userTransactions = await accounts
       .reduce(async (acc, accountId) => {
         const accountTransactionSnapshots = await acc

         const transactionSnapshots = await firestore.collection('transactions')
            .where('accountId', '==', accountId)
            .get()

         const transactionsData = transactionSnapshots.docs
            .map(transactionSnapshot => ({ ...transactionSnapshot.data(), id: transactionSnapshot.id}))

         return Promise.resolve([...accountTransactionSnapshots, ...transactionsData])
       }, Promise.resolve([]))

    let categories = userTransactions.reduce((categoryAmounts, transaction) => {
      const {category, amount: transactionAmount, created} = transaction
      const createdMS = created.seconds * 1000

      const afterDate = startDate && createdMS >= startDate
      const beforeDate = endDate && createdMS <= endDate

      if (afterDate && beforeDate) {
        let categoryAmount = categoryAmounts[category] ? categoryAmounts[category] : 0;

        categoryAmount += transactionAmount

        return {...categoryAmounts, [category]: categoryAmount}
      }

      if(!(endDate && startDate) && (afterDate || beforeDate)){
        let categoryAmount = categoryAmounts[category] ? categoryAmounts[category] : 0;

        categoryAmount += transactionAmount

        return {...categoryAmounts, [category]: categoryAmount}
      }

      return categoryAmounts
    }, {})

    categories = Object
       .entries(categories)
       .map(categoryItem => ({category: categoryItem[0], amount: categoryItem[1]}))

    return res.json({categories});
  }
  catch (error) {
    return res.json({status: 'error', error});
  }
})

module.exports = router
