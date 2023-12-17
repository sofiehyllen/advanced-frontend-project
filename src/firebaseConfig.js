// KODET AF KAROLINE LERCHE & SOFIE HYLLEN
// Importér de funktioner, du har brug for, fra de nødvendige SDK'er.
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Tilføj SDK'er til de Firebase-produkter, du ønsker at bruge.
// https://firebase.google.com/docs/web/setup#available-libraries

// Konfigurationen for din webapps Firebase-projekt
const firebaseConfig = {
  apiKey: "AIzaSyBjeFqAUkxsfhnj_bVxic7FEfyWiw1IgsI",
  authDomain: "tryllespejlet-a1095.firebaseapp.com",
  databaseURL: "https://tryllespejlet-a1095-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tryllespejlet-a1095",
  storageBucket: "tryllespejlet-a1095.appspot.com",
  messagingSenderId: "1007377059791",
  appId: "1:1007377059791:web:efbadd8372e1491bd70cba"
};

// Initialiser Firebase ved at konfigurere appen
const app = initializeApp(firebaseConfig);
// Eksportér Firestore-databasen for webshoppen
export const webshopDatabase = getFirestore(app);
