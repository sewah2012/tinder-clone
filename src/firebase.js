import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAYBxAQoOIbUSUDTxrU3XcXh62mLiMSskA",
    authDomain: "tinder-clone-12f17.firebaseapp.com",
    databaseURL: "https://tinder-clone-12f17.firebaseio.com",
    projectId: "tinder-clone-12f17",
    storageBucket: "tinder-clone-12f17.appspot.com",
    messagingSenderId: "695335489570",
    appId: "1:695335489570:web:41e0c6c13925ca5bf3ba7b",
    measurementId: "G-XY6ZLRLL4M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;