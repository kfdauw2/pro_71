import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCCCd7KJyfQfIBTraRAWpqBkxAGkgoYuwc",
  authDomain: "pro-71-6c097.firebaseapp.com",
  projectId: "pro-71-6c097",
  storageBucket: "pro-71-6c097.appspot.com",
  messagingSenderId: "977237418737",
  appId: "1:977237418737:web:6dd571d39d0e86790cbf50"
};c
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
