// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS0ZTaJfKdkPbJNmnFvHhAv_53Yy66rMA",
  authDomain: "my-portfolio-48640.firebaseapp.com",
  projectId: "my-portfolio-48640",
  storageBucket: "my-portfolio-48640.appspot.com",
  messagingSenderId: "128358197792",
  appId: "1:128358197792:web:27ddd9574a2a5909ba2a45",
  measurementId: "G-NY3BVXQ26S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;