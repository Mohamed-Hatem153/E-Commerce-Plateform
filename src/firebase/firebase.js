import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3GjIbpOQAuAxe2tHYT6fBL6bXdyiaJqQ",
  authDomain: "e-commerce-proj-db.firebaseapp.com",
  projectId: "e-commerce-proj-db",
  storageBucket: "e-commerce-proj-db.appspot.com",
  messagingSenderId: "30923442525",
  appId: "1:30923442525:web:de0ef804596b3615ccc0b4",
  measurementId: "G-CQ5VFKKPY7",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
