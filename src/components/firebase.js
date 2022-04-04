import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjJtUklbCEcdJYGH_j2hxyugDcajdeGoc",
  authDomain: "whatsapp-clone-4172a.firebaseapp.com",
  projectId: "whatsapp-clone-4172a",
  storageBucket: "whatsapp-clone-4172a.appspot.com",
  messagingSenderId: "599580806444",
  appId: "1:599580806444:web:6217505ffce4a29d2b7089",
  measurementId: "G-R541B4CHLX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;