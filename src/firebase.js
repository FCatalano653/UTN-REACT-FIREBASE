// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, setPersistence, browserLocalPersistence} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSy1qd6rQWGi0ZaYVSuDi_mAbEEmy0BGc",
  authDomain: "ecomm-natura.firebaseapp.com",
  projectId: "ecomm-natura",
  storageBucket: "ecomm-natura.appspot.com",
  messagingSenderId: "291512695526",
  appId: "1:291512695526:web:1b9394258515a18a811927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
    .then(()=> {
        console.log("Auth persistence set to LocalStorage succesfuly");
    })
    .catch((error) => {
        console.error("Error setting auth persistence", error);
    })