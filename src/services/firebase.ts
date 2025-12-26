import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração Web do Firebase (copiada do Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCZz4Jz7esILfeEYwQ701ACDQntLjkERiA",
  authDomain: "my-expenses-app-1a92f.firebaseapp.com",
  projectId: "my-expenses-app-1a92f",
  storageBucket: "my-expenses-app-1a92f.firebasestorage.app",
  messagingSenderId: "1031701508616",
  appId: "1:1031701508616:web:2aef0f906be2b4ce1a57bd",
};

const app = initializeApp(firebaseConfig);

// Exporta apenas Auth e Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
