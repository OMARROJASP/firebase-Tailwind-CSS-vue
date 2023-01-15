import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyB-5kQI_hesk7lDPK4TQhV-aJszFczP2rM",
    authDomain: "finanzas-2022-2.firebaseapp.com",
    projectId: "finanzas-2022-2",
    storageBucket: "finanzas-2022-2.appspot.com",
    messagingSenderId: "538793850326",
    appId: "1:538793850326:web:298ceeecfaa8458a4c2077"
};

 initializeApp(firebaseConfig);
 const auth = getAuth();

 const  db = getFirestore()

export {auth, db}
