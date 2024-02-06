// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxYeHjHJekZU3X-RIK3O2O4S0O3yHutBo",
  authDomain: "simple-firebase-52ac6.firebaseapp.com",
  projectId: "simple-firebase-52ac6",
  storageBucket: "simple-firebase-52ac6.appspot.com",
  messagingSenderId: "1007242680232",
  appId: "1:1007242680232:web:03aa7542444407f42eef9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app