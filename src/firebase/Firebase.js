 

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
 
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGpgUgr4XWzF6oPk3mDDeBCa077dD3R38",
  authDomain: "blablachat-91851.firebaseapp.com",
  projectId: "blablachat-91851",
  storageBucket: "blablachat-91851.appspot.com",
  messagingSenderId: "453953203444",
  appId: "1:453953203444:web:6c8fa9d2ef26858a9342a1",
  measurementId: "G-7HK0944JN0"



};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
 
  