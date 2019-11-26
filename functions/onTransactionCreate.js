const functions = require('firebase-functions');
const adminInitializer = require('./firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();

module.exports = functions.firestore.document('/transactions/{transactionId}')
   .onCreate(async (snapshot, context) => {
     try {
       const {accountId} = snapshot.data()

       const accountSnapshot = await firestore.collection('accounts')
          .doc(accountId)
          .get()

       const { transactions } = accountSnapshot.data()
       const updatedTransactions = [...transactions, snapshot.id]

       await accountSnapshot.ref.set({transactions: updatedTransactions}, {merge: true})
     }
     catch (e) {
       return e
     }
   })
