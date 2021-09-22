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
  }

