import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMwkTwKDl79-QaAmUCI5M7xHQhAKRl4AE",
  authDomain: "base-datos-importaner.firebaseapp.com",
  projectId: "base-datos-importaner",
  storageBucket: "base-datos-importaner.appspot.com",
  messagingSenderId: "1059533876984",
  appId: "1:1059533876984:web:0131d0c01f1fc55d71550d",
  measurementId: "G-L7MYVJ9Z02"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);