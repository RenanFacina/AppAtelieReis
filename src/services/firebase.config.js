import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; //Autenticação Firebase
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { getDatabase } from "firebase/database"; //Banco de Dados Firebase

//firebaseConfig Kauan
// const firebaseConfig = {
//   apiKey: "AIzaSyAErrKyXourUIHD2bB-0J_W7YFg_nl45-g",
//   authDomain: "login-ateliereis.firebaseapp.com",
//   projectId: "login-ateliereis",
//   storageBucket: "login-ateliereis.appspot.com",
//   messagingSenderId: "6667615081",
//   appId: "1:6667615081:web:326bda12ee5e7893fd9bf8",
// };

//firebaseConfig Renan
const firebaseConfig = {
  apiKey: "AIzaSyABRNWKDiN9sdUSC_m6Nc_LHPwOax8FL3E",
  authDomain: "atelie-reis.firebaseapp.com",
  projectId: "atelie-reis",
  storageBucket: "atelie-reis.appspot.com",
  messagingSenderId: "687704728966",
  appId: "1:687704728966:web:a1214cc698e0c68fb77807",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
