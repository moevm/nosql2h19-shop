import fetchAPI from "../../commons/api";
import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAVy8ZIdRP5BI_DBT4jpdGI1p8Sb4UJAgU",
    authDomain: "lab-project-aa6c1.firebaseapp.com",
    databaseURL: "https://lab-project-aa6c1.firebaseio.com",
    projectId: "lab-project-aa6c1",
    storageBucket: "lab-project-aa6c1.appspot.com",
    messagingSenderId: "53754137931",
    appId: "1:53754137931:web:73bb6015c65bee08a9acce",
    measurementId: "G-Y01WLBZHVQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();

export const getUsers = () => {
    console.log('get')
    // return firestore.collection('users')
    //     .get()
    //     .then(snapshot => {
    //         let items = [];
    //         snapshot.docs.forEach(doc => {
    //             items.push({...doc.data(), id: doc.id});
    //         });
    //         return items
    //     })
    return fetchAPI.get(
        `/users`
    );
};
