// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPAoOexbROsKYSiYoKznNbUIQCA3tGxbM",
  authDomain: "talentai-site.firebaseapp.com",
  projectId: "talentai-site",
  storageBucket: "talentai-site.appspot.com",
  messagingSenderId: "360116024337",
  appId: "1:360116024337:web:b2b2d3843e705985d4adb0",
  measurementId: "G-D7PRRLQYPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
