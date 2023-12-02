// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHcKb9Y3GQDfeH6qda-z3SYstZLhQkoLA",
    authDomain: "e-commerce-next-js-50f60.firebaseapp.com",
    projectId: "e-commerce-next-js-50f60",
    storageBucket: "e-commerce-next-js-50f60.appspot.com",
    messagingSenderId: "829403051030",
    appId: "1:829403051030:web:ae2554eb0daaf9ceed3137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()