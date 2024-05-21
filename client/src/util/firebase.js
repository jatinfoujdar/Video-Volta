// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ32XF09YvnVCN4CTzpAiZuiSdhWZYJHI",
  authDomain: "videovonda.firebaseapp.com",
  projectId: "videovonda",
  storageBucket: "videovonda.appspot.com",
  messagingSenderId: "766699293594",
  appId: "1:766699293594:web:fa09a5f0187ec516f44823",
  measurementId: "G-W1EJ02S4X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
