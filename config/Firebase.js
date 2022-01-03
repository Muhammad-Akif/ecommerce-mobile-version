import firebase from 'firebase/app';

// Optionally import the services that you want to use
import "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

const firebaseConfigure = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyD5VHP4istm_0-4KMe5kcCn-qziQm_sA04",
        authDomain: "exposhopapp.firebaseapp.com",
        projectId: "exposhopapp",
        storageBucket: "exposhopapp.appspot.com",
        messagingSenderId: "960883386674",
        appId: "1:960883386674:web:7a254dc9b0d6f51bc78f2b",
        measurementId: "G-8MVWZVSJNC"
    };
    firebase.initializeApp(firebaseConfig);
}

export default firebase;