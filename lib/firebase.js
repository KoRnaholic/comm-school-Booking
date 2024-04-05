// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZvXOkvuyEf4jLxL91l33U5b9HJGgs3gU",
  authDomain: "booking-d2c99.firebaseapp.com",
  projectId: "booking-d2c99",
  storageBucket: "booking-d2c99.appspot.com",
  messagingSenderId: "251471413817",
  appId: "1:251471413817:web:9097351a4b8bc3a82883e8",
  measurementId: "G-SNK6QN0Z1F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
