// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlPsZrVWEFKPyYM8KVnEAU5XYsq-ToxIs",
  authDomain: "thingstodo-4a144.firebaseapp.com",
  projectId: "thingstodo-4a144",
  storageBucket: "thingstodo-4a144.appspot.com",
  messagingSenderId: "1097876923755",
  appId: "1:1097876923755:web:8182382a756315c3fad82e",
  measurementId: "G-242EBVMGJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)


