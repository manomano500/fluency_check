// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  env: "AIzaSyC_xDiWIa5gzy0mBka9a7luEH7hjWV_I-Y",
  authDomain: "chatapp-93e73.firebaseapp.com",
  databaseURL: "https://chatapp-93e73-default-rtdb.firebaseio.com",
  projectId: "chatapp-93e73",
  storageBucket: "chatapp-93e73.appspot.com",
  messagingSenderId: "187612805868",
  appId: "1:187612805868:web:b9273958cd02c1317183c9",
  measurementId: "G-1Q1S7LT0BX"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics ,auth, db}
