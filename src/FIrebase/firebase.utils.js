import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDEVBqFP4Tt1JmmTCmE9KMKw5cXn6WgYA8",
  authDomain: "stevie-clothing.firebaseapp.com",
  projectId: "stevie-clothing",
  storageBucket: "stevie-clothing.appspot.com",
  messagingSenderId: "826980096674",
  appId: "1:826980096674:web:1cb154601b14c3f81015fb",
  measurementId: "G-Z3HV2Q8DYH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
