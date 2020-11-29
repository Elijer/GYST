import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';

import { gameplay } from "./gameplay";
import { firebaseConfig } from "./firebaseConfig";

document.addEventListener("DOMContentLoaded", event => {

    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();
    console.log(db);

})



//gameplay();