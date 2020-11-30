import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import { firebaseConfig } from "./firebaseConfig";

import { gameplay } from "./gameplay";

document.addEventListener("DOMContentLoaded", event => {

    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
    console.log(db);

})

Window.findGame = function(){
    console.log("find game");
};


//gameplay();