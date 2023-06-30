// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "majesty-space-tours.firebaseapp.com",
    projectId: "majesty-space-tours",
    storageBucket: "majesty-space-tours.appspot.com",
    messagingSenderId: "389297399991",
    appId: "1:389297399991:web:dcc532d8968f670ee94532"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
