// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPYDzFWUvaI0k-gtM2lJWMdmpUANFdjqU",
  authDomain: "house-martkplace-app.firebaseapp.com",
  projectId: "house-martkplace-app",
  storageBucket: "house-martkplace-app.appspot.com",
  messagingSenderId: "532886077842",
  appId: "1:532886077842:web:f7861f3f71c86ef9fc814b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
