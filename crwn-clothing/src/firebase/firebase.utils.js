import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCJ_Sz1tsykZnbWTHgLh0g1jLNfSBbIBaE",
    authDomain: "crwn-db-10237.firebaseapp.com",
    projectId: "crwn-db-10237",
    storageBucket: "crwn-db-10237.appspot.com",
    messagingSenderId: "663717480237",
    appId: "1:663717480237:web:8d7488240b2bdfb46575a4",
    measurementId: "G-25RJ05002X"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


