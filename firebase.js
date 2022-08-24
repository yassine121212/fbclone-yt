import firebase from "firebase";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "facebook-d71f9.firebaseapp.com",
  projectId: "facebook-d71f9",
  storageBucket: "facebook-d71f9.appspot.com",
  messagingSenderId: "871547522523",
  appId: "1:871547522523:web:447d9ef904c1573033ebfe",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
// Initialize Firebase

const db = app.firestore();
const storage = firebase.storage();
export { db, storage };
