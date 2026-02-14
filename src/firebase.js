import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA442yE0Js6lYXlC_llt__UGKEvJVyYhBU",
  authDomain: "ai-learning-dashboard-118ff.firebaseapp.com",
  projectId: "ai-learning-dashboard-118ff",
  storageBucket: "ai-learning-dashboard-118ff.firebasestorage.app",
  messagingSenderId: "864686106145",
  appId: "1:864686106145:web:a8901b82f3e4779ef12560",
  measurementId: "G-08EG0FE1FK",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
