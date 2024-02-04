// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwRohXTeTsTyh9kEXqwAdXFzXBXrDqgcw",
  authDomain: "netflix-1a512.firebaseapp.com",
  projectId: "netflix-1a512",
  storageBucket: "netflix-1a512.appspot.com",
  messagingSenderId: "847914994573",
  appId: "1:847914994573:web:9da0d1c4096da7aa7d8bc4",
  measurementId: "G-0JG7X1FGXV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
