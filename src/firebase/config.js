// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL: "https://journalapp-668ea-default-rtdb.firebaseio.com",
  apiKey: "AIzaSyAs_LCFRuane-Z8NL6HHYzuqwCTKozyHW8",
  authDomain: "journalapp-668ea.firebaseapp.com",
  projectId: "journalapp-668ea",
  storageBucket: "journalapp-668ea.appspot.com",
  messagingSenderId: "126580580496",
  appId: "1:126580580496:web:d0b534d6b3a82bfc397815",
  measurementId: "G-04C9N7JVQJ",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default firebase_app;
