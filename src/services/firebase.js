import firebase from "firebase/compat/app";
import "firebase/compat/database";

import firebaseConfig from "./dataConfig";

 
  firebase.initializeApp(firebaseConfig);

  export default  class Firebase{
    constructor() {
        this.fire = firebase;
        this.database= this.fire.database();
      }

      getBanks = (cb) => {
        this.database.ref("banksList").once("value", (snapshot) => cb(snapshot.val()));
      }

      sendNewBank = (data) => {
        const newKey = this.database.ref().child('banksList').push().key;
        this.database.ref(`banksList/${newKey}`).set(data);
      }

      editBank = (key, data) => {
        this.database.ref(`banksList/${key}`).set(data);
      }

       deleteBank = (key) => {
        this.database.ref(`banksList/${key}`).set(null);
       }
  }

