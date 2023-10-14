// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkUIULu4iZpcerooi6A2bcQOYnhidAPqY",
  authDomain: "react-contact-1662e.firebaseapp.com",
  projectId: "react-contact-1662e",
  storageBucket: "react-contact-1662e.appspot.com",
  messagingSenderId: "379587747092",
  appId: "1:379587747092:web:ede04d020ef5899dc03601"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);