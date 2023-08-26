// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDabT79ykUkef23rpx6ek0ZRyIMnKhSNo4",
  authDomain: "talkioo.firebaseapp.com",
  projectId: "talkioo",
  storageBucket: "talkioo.appspot.com",
  messagingSenderId: "1052777790335",
  appId: "1:1052777790335:web:01629fa6bbc9de8523784a",
  measurementId: "G-P8BKKGWZ7B"
};

// Initialize Firebase, auth and dbs
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };