// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2fJc_Ij-ImYKqzgcZnZTRhNJJFbzbCHM",
  authDomain: "netflix-gpt-64a87.firebaseapp.com",
  projectId: "netflix-gpt-64a87",
  storageBucket: "netflix-gpt-64a87.firebasestorage.app",
  messagingSenderId: "878575022524",
  appId: "1:878575022524:web:7bde37b59769782e007bb9",
  measurementId: "G-1REF3H8HXP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
