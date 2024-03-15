// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-af775.firebaseapp.com",
  projectId: "mern-blog-af775",
  storageBucket: "mern-blog-af775.appspot.com",
  messagingSenderId: "191978839889",
  appId: "1:191978839889:web:6bd1bb09c363025199fd70",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
