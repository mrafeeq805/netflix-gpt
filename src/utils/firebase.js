// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9mvBp8ONI0mwTDDOWaFABwltZUJ5ylmk",
  authDomain: "netflix-gpt-fcd02.firebaseapp.com",
  projectId: "netflix-gpt-fcd02",
  storageBucket: "netflix-gpt-fcd02.appspot.com",
  messagingSenderId: "14035966879",
  appId: "1:14035966879:web:74057155af8c62e7fc3baa",
  measurementId: "G-93FQH0T46K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);