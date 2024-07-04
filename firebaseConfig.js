
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
  apiKey: "AIzaSyA--Rw4fS7wFJ2U_20i4Kz1BVxzBXtfBEw",
  authDomain: "pruebagastos-101fc.firebaseapp.com",
  projectId: "pruebagastos-101fc",
  storageBucket: "pruebagastos-101fc.appspot.com",
  messagingSenderId: "664014395895",
  appId: "1:664014395895:web:1822363c7304a1b914b6f2",
  measurementId: "G-CN0DLG5MYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { db, auth }