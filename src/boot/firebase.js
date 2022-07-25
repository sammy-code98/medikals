import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAB6uEADnUGhqvYJ-NVnLo-0P3YhwtvHI0",
  authDomain: "medicals-8921f.firebaseapp.com",
  projectId: "medicals-8921f",
  storageBucket: "medicals-8921f.appspot.com",
  messagingSenderId: "7912751222",
  appId: "1:7912751222:web:3a1d9d52e5aaac51095f57",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
