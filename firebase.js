const firebase = require('firebase');
require('firebase/firestore');

const firebaseInit = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCb0PWPBKRy3BTTDd0JnXZbkuMcpFfevyI',
    authDomain: 'syari-admin-apps.firebaseapp.com',
    projectId: 'syari-admin-apps',
    storageBucket: 'syari-admin-apps.appspot.com',
    messagingSenderId: '564125809889',
    appId: '1:564125809889:web:bfa5d711264be0cb360ba0',
    measurementId: 'G-PXBBSHPKFG',
  };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();
  return db;
};

module.exports = firebaseInit;
