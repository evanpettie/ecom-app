import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAiZz35VVeIC1ZbUcBm7SdtIADtVq5wZz0",
  authDomain: "archa-db.firebaseapp.com",
  databaseURL: "https://archa-db.firebaseio.com",
  projectId: "archa-db",
  storageBucket: "",
  messagingSenderId: "9088299784",
  appId: "1:9088299784:web:5d0909c1f3b018a4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;