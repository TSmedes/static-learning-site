// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-ueBv29elLk1L48GPIQwcQqO3aPImmcE",
  authDomain: "greg-site-de305.firebaseapp.com",
  projectId: "greg-site-de305",
  storageBucket: "greg-site-de305.firebasestorage.app",
  messagingSenderId: "37516702183",
  appId: "1:37516702183:web:67fae93cc116eba68a0d42",
  measurementId: "G-98E21R1878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);