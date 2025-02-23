// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myestate-92d74.firebaseapp.com",
  projectId: "myestate-92d74",
  storageBucket: "myestate-92d74.firebasestorage.app",
  messagingSenderId: "501937114015",
  appId: "1:501937114015:web:8172a3a1b7ae886b82cbaa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

