// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7XvUBGBzTg8U2k4MjOfl33G9hsM6YDFk",
  authDomain: "simple-firebase-2bb11.firebaseapp.com",
  projectId: "simple-firebase-2bb11",
  storageBucket: "simple-firebase-2bb11.appspot.com",
  messagingSenderId: "1042887653991",
  appId: "1:1042887653991:web:15e48bb24f0c08955a32c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)