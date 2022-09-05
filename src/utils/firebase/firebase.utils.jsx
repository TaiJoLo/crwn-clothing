import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5cJq2Zvt_chb3--F8c-kRKwICeqjYYJk",
  authDomain: "crwn-clothing-db-47fc6.firebaseapp.com",
  projectId: "crwn-clothing-db-47fc6",
  storageBucket: "crwn-clothing-db-47fc6.appspot.com",
  messagingSenderId: "952208864791",
  appId: "1:952208864791:web:b2d2ab8635127d2b1c0e52",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
