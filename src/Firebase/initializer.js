// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5lvgctBfFgghlyrv2N1bNS4va-qea-LQ",
  authDomain: "naukridotcomweb.firebaseapp.com",
  projectId: "naukridotcomweb",
  storageBucket: "naukridotcomweb.appspot.com",
  messagingSenderId: "116385283589",
  appId: "1:116385283589:web:c2ce73d5799278f16fe66c",
  measurementId: "G-9M3NLLH8DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();


