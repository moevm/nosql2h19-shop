const functions = require('firebase-functions');
const adminInitializer = require('./firebaseInitialiseApp');

const admin = adminInitializer.initialize();
const firestore = admin.firestore();

module.exports = functions.firestore.document('/accounts/{accountId}')
   .onCreate(async (snapshot, context) => {
     try {
       const {userId} = snapshot.data()

       const userSnapshot = await firestore.collection('users')
          .doc(userId)
          .get()

       const { accounts } = userSnapshot.data()
       const updatedAccounts = [...accounts, snapshot.id]

       await userSnapshot.ref.set({accounts: updatedAccounts}, {merge: true})
     }
     catch (e) {
       return e
     }
   })
