const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyAgjRV8i-82q8oFdwTO3i7RrDAnN3ZvS4M",
    authDomain: "aula-firebase-ea011.firebaseapp.com",
    projectId: "aula-firebase-ea011",
    storageBucket: "aula-firebase-ea011.appspot.com",
    messagingSenderId: "235575060905",
    appId: "1:235575060905:web:aee0704af985f7da7afcb8"
  };

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

module.exports = db;