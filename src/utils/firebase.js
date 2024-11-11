// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvZndcpqiJSiaaV43hLonfzEswOMZaS2I",
  authDomain: "netflixgpt-a45c5.firebaseapp.com",
  projectId: "netflixgpt-a45c5",
  storageBucket: "netflixgpt-a45c5.firebasestorage.app",
  messagingSenderId: "878218624074",
  appId: "1:878218624074:web:724730fae01e7cec1b7ab3",
  measurementId: "G-12MQFDY1C3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
