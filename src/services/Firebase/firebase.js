// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAf1N5k5t5C53C8puRLnFprsndQTFiTJ7E",
  authDomain: "twitter-clone-d9ec6.firebaseapp.com",
  projectId: "twitter-clone-d9ec6",
  storageBucket: "twitter-clone-d9ec6.appspot.com",
  messagingSenderId: "683332868685",
  appId: "1:683332868685:web:be947e1cfbd3e2b2ea5a04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { provider, auth };
