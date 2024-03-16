/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore , Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHtR8UCertxf7C0o9g0hTtKxyhPLDXBoU",
    authDomain: "scissors-app-6152b.firebaseapp.com",
    projectId: "scissors-app-6152b",
    storageBucket: "scissors-app-6152b.appspot.com",
    messagingSenderId: "190212890253",
    appId: "1:190212890253:web:bc1e4fb9bdeeee2ced4cc4",
    measurementId: "G-KQNSL9NYRS"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize a Timestamp
export const timestamp = Timestamp.fromDate(new Date());