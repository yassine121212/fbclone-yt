import firebase from "./firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoRkrkmIDfuehDfUmzgJ1B21KMntdm5Os",
  authDomain: "fbclone-yt-763ce.firebaseapp.com",
  projectId: "fbclone-yt-763ce",
  storageBucket: "fbclone-yt-763ce.appspot.com",
  messagingSenderId: "599619711605",
  appId: "1:599619711605:web:367346284dc71672567e3c",
  measurementId: "G-6DMLPM9D2F",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// const storage = firebase.storage();
// console.log(storage);

export { db };
