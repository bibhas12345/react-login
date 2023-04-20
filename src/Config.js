// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqtjo91TerrP7OYOpETscdfjQbx7XYSY4",
  authDomain: "project1-48a3f.firebaseapp.com",
  projectId: "project1-48a3f",
  storageBucket: "project1-48a3f.appspot.com",
  messagingSenderId: "195933238513",
  appId: "1:195933238513:web:1f4e2219382f6f0adf6550",
  measurementId: "G-VZSC46MXG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth  = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};