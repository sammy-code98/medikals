import { initializeApp } from "firebase/app";
import { deleteUser, getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

// connect firebase db

const db = getFirestore(firebase);

// get current user info

const auth = getAuth();
const getCurentUser = () => {
  // console.log('ok');
  return auth.currentUser;
};

export { getCurentUser };

export { db };

export default firebase;
