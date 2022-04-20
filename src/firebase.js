import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQap-TdTzZgIl0C64-8I85CwJbu2wlP7I",
    authDomain: "hobby-shop-24434.firebaseapp.com",
    projectId: "hobby-shop-24434",
    storageBucket: "hobby-shop-24434.appspot.com",
    messagingSenderId: "322929799004",
    appId: "1:322929799004:web:c9c3257bddc48f5639db99",
    measurementId: "G-WHKB9H6TG3"
  

});

const db = firebase.firestore();
const auth = firebase.auth();

export {auth};