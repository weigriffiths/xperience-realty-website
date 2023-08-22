import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDv7mn7Ah-PkYILQlugFp3BdXTeXh87F3k",
    authDomain: "xperience-demo-d06f5.firebaseapp.com",
    projectId: "xperience-demo-d06f5",
    storageBucket: "xperience-demo-d06f5.appspot.com",
    messagingSenderId: "926144381954",
    appId: "1:926144381954:web:4ad954d4bc0ccdb968531b"
  };
  
  
// Initialize Firebase
// Remove possibility of app being initialised - Singleton pattern
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }