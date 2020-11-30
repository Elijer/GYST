import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import { firebaseConfig } from "./firebaseConfig";

import { gameplay } from "./gameplay";
import { findGame } from "./findGame";

document.addEventListener("DOMContentLoaded", event => {

    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    findGame(db);

})


//gameplay();