// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH4L9_iPHkNu8wkWc6psdT1iCkrKrqbMQ",
  authDomain: "demo2-aa9cd.firebaseapp.com",
  projectId: "demo2-aa9cd",
  storageBucket: "demo2-aa9cd.appspot.com",
  messagingSenderId: "832662062463",
  appId: "1:832662062463:web:252c7de6638178e9d4064a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth };
