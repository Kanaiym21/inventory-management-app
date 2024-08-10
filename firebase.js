// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXHNdc75tVy3vr4BYT0z1IhSBREqvwZZs",
  authDomain: "inventory-management-app-d68da.firebaseapp.com",
  projectId: "inventory-management-app-d68da",
  storageBucket: "inventory-management-app-d68da.appspot.com",
  messagingSenderId: "816234784897",
  appId: "1:816234784897:web:e5e2e950c5432c9d8c8580",
  measurementId: "G-HJPGKJDWDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}