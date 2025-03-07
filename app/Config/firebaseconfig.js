import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSWCIeCQgq4TPk2pmpVplC6pw02W4RuVw",
  authDomain: "secret-valentine-7548e.firebaseapp.com",
  projectId: "secret-valentine-7548e",
  storageBucket: "secret-valentine-7548e.firebasestorage.app",
  messagingSenderId: "624364218286",
  appId: "1:624364218286:web:e558d0f499c336be814a3f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
