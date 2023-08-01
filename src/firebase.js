// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import{getFirestore} from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1FGCBzwOAlWyGrnQtNonHKoY9hzJbj00",
  authDomain: "blog-app-ea347.firebaseapp.com",
  projectId: "blog-app-ea347",
  storageBucket: "blog-app-ea347.appspot.com",
  messagingSenderId: "647047332913",
  appId: "1:647047332913:web:888de5dcb8142651f20110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
