// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "yourAPIkey",
  authDomain: "my-portfolio",
  projectId: "my-portfolio",
  storageBucket: "my-portfolio",
  messagingSenderId: "ID",
  appId: "ID",
  measurementId: "Id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
