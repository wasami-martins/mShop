import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCjSxf6cF-Wb67-XecUaf9xmmOw5vt2inQ",
  authDomain: "mshop-72339.firebaseapp.com",
  projectId: "mshop-72339",
  storageBucket: "mshop-72339.appspot.com",
  messagingSenderId: "935237894312",
  appId: "1:935237894312:web:d9d80f3fc1dc74854c429d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
