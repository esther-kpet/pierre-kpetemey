
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyASCURXcSSZmmunFlfc1DcqPWuEU25TYj8",
  authDomain: "pierre-kpetemey.firebaseapp.com",
  projectId: "pierre-kpetemey",
  storageBucket: "pierre-kpetemey.appspot.com",
  messagingSenderId: "226695211569",
  appId: "1:226695211569:web:e4d58c64135e0d3de28310"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);