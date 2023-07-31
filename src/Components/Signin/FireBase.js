import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3AWX80aX_GZXZUzEVUpZuVvKLO4vcNc4",
  authDomain: "booking-47377.firebaseapp.com",
  projectId: "booking-47377",
  storageBucket: "booking-47377.appspot.com",
  messagingSenderId: "960819738432",
  appId: "1:960819738432:web:13e53de2f07b68c1cc6ca5"
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);


 const provider=new GoogleAuthProvider();


 export const signInWithGoogle=()=>{
  signInWithPopup(auth,provider)
  .then((result)=>{
    console.log(result);
  })
  .catch((err)=>{
    console.log(err);
  })
 }

