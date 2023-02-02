// @ts-nocheck
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIt2CEeLD6vwdIynARFHSeGnRmg2GMpY4",
  authDomain: "salubrify-6c13e.firebaseapp.com",
  projectId: "salubrify-6c13e",
  storageBucket: "salubrify-6c13e.appspot.com",
  messagingSenderId: "978398499346",
  appId: "1:978398499346:web:524ce556fec2285f35becb",
  measurementId: "G-QJQKMT2FF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

const provider = new GoogleAuthProvider();

const signInWithGoogle = async() => {
  const {user} = await signInWithPopup(auth, provider);
  const {refreshToken,providerData} = user;
  localStorage.setItem('user',JSON.stringify(refreshToken));
  localStorage.setItem('providerData',JSON.stringify(providerData));
  console.log("hello")

}



export default {app,auth,db,signInWithGoogle,provider}