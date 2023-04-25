// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc1gMkD9fqT447Jgt9ctPLGZaeeMghkVM",
  authDomain: "tesla-clone-77de2.firebaseapp.com",
  projectId: "tesla-clone-77de2",
  storageBucket: "tesla-clone-77de2.appspot.com",
  messagingSenderId: "345954698293",
  appId: "1:345954698293:web:ce3c952b0f6d5e51dd9d7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();