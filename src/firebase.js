import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDA-aV8kweRiwwvuWIe1PpK08Me_NT8v54",
    authDomain: "twitter-clone-f6d30.firebaseapp.com",
    projectId: "twitter-clone-f6d30",
    databaseURL: "https://twitter-clone-f6d30.firebaseio.com",
    storageBucket: "twitter-clone-f6d30.appspot.com",
    messagingSenderId: "641926117557",
    appId: "1:641926117557:web:1514f505f21c8c593066fc",
    measurementId: "G-QH0QPPK4H0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;