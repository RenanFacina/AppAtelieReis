// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAErrKyXourUIHD2bB-0J_W7YFg_nl45-g",
  authDomain: "login-ateliereis.firebaseapp.com",
  projectId: "login-ateliereis",
  storageBucket: "login-ateliereis.appspot.com",
  messagingSenderId: "6667615081",
  appId: "1:6667615081:web:326bda12ee5e7893fd9bf8"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);