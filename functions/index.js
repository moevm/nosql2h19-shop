const express = require('express');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp({
    databaseURL: "https://lab-project-aa6c1.firebaseio.com",
    projectId: "lab-project-aa6c1",
    storageBucket: "lab-project-aa6c1.appspot.com",
});
const firestore = admin.firestore();

const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.get('/users', (req, res) => {
    console.log('get users');
    firestore.collection('users')
        .get()
        .then(snapshot => {
            let items = [];
            snapshot.docs.forEach(doc => {
                items.push({...doc.data(), id: doc.id});
            });
            return items
        }).then(items => {
        res.json({items});
    })
});

exports.app = functions.https.onRequest(app);