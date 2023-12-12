// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjeFqAUkxsfhnj_bVxic7FEfyWiw1IgsI",
  authDomain: "tryllespejlet-a1095.firebaseapp.com",
  databaseURL: "https://tryllespejlet-a1095-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tryllespejlet-a1095",
  storageBucket: "tryllespejlet-a1095.appspot.com",
  messagingSenderId: "1007377059791",
  appId: "1:1007377059791:web:efbadd8372e1491bd70cba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const webshopDatabase = getFirestore(app);

