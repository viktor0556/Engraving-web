import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAqoyGkc86_LDOVugVC1PCijMlRO0BRYbE",
  authDomain: "graviradmin.firebaseapp.com",
  projectId: "graviradmin",
  storageBucket: "graviradmin.firebasestorage.app",
  messagingSenderId: "484671238061",
  appId: "1:484671238061:web:1fc067ba1dbd840b263b24",
  measurementId: "G-QWTGZXSRCP"
}

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);