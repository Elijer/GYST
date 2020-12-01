import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import { firebaseConfig } from "./firebaseConfig";

import { gameplay } from "./gameplay";
import { findGame } from "./findGame";

document.addEventListener("DOMContentLoaded", event => {

    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
    handleEmulators(db);
    findGame(db);

})

function handleEmulators(_db){
    if (window.location.hostname === "localhost") {
        console.log("localhost detected! Using functions and firestore emulators instead of live instances");
        _db.settings({ 
          host: "localhost:8080",
          ssl: false
        });
    }
}


//gameplay();