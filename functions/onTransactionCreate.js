const functions = require('firebase-functions');
const adminInitializer = require('./firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();

module.exports = functions.firestore.document('/transactions/{transactionId}')
   .onCreate(async (snapshot, context) => {
     try {
       const {accountId} = snapshot.data()
       console.log(accountId)
       const accountRef =  await firestore.collection('accounts').doc(accountId)

       await firestore.runTransaction(DBTransaction => {
         return DBTransaction.get(accountRef)
            .then(doc => {
              const { transactions } = doc.data()
              console.log(transactions, snapshot.id)
              const updatedTransactions = [...transactions, snapshot.id]

              DBTransaction.update(accountRef, {transactions: updatedTransactions});

              return updatedTransactions;
            });
       })

       // const accountSnapshot = await firestore.collection('accounts')
       //    .doc(accountId)
       //    .get()
       //
       // const { transactions } = accountSnapshot.data()
       // const updatedTransactions = [...transactions, snapshot.id]
       //
       // //TODO переделать ФБ транзакцией
       // await accountSnapshot.ref.set({transactions: updatedTransactions}, {merge: true})


       const userId = snapshot.data().userId
       const userRef = await firestore.collection('users').doc(userId)

       await firestore.runTransaction(transaction => {
         return transaction.get(userRef)
            .then(doc => {
              const { spendings } = doc.data()
              const { amount } = snapshot.data()
              const newSpendings = spendings + amount
              console.log(spendings, amount)
              transaction.update(userRef, {spendings: newSpendings});

              return newSpendings;
            });
       })
     }
     catch (e) {
       return e
     }
   })
