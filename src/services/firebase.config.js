import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; //Autenticação Firebase
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { getDatabase } from "firebase/database"; //Banco de Dados Firebase

//firebaseConfig
const firebaseConfig = {
  //sua firebaseConfig aqui
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
