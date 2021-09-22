import firebase from "firebase";
import "firebase/storage";

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

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
// Initialize Firebase

const db = app.firestore();
const storage = firebase.storage();
export { db, storage };
