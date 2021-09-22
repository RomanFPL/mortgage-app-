import firebase from "firebase/compat/app";
import "firebase/compat/database";

import firebaseConfig from "./dataConfig";



  
  firebase.initializeApp(firebaseConfig);

  export default  class Firebase{
    constructor() {
        this.fire = firebase;
        this.database= this.fire.database();
      }

      getBanks = () => {
        this.database.ref("banks-list").on("value", (snapshot) => console.log(snapshot.val()));
      }
  }

