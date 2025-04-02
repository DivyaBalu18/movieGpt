// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUBzmsTlBta45p3QdkAJB7gQAvbE5YVxU",
  authDomain: "moviegpt-f0a4a.firebaseapp.com",
  projectId: "moviegpt-f0a4a",
  storageBucket: "moviegpt-f0a4a.firebasestorage.app",
  messagingSenderId: "245775249582",
  appId: "1:245775249582:web:d4af9e1a635b7dabc77d3f",
  measurementId: "G-RWQEE8QEPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();