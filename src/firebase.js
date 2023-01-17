
  import firebase from "firebase";


  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDf_t3xTC2bTJpWwIH0Bbwf8SILa0HfEGY",
    authDomain: "facebook-messenger-clone-a5374.firebaseapp.com",
    projectId: "facebook-messenger-clone-a5374",
    storageBucket: "facebook-messenger-clone-a5374.appspot.com",
    messagingSenderId: "770570755340",
    appId: "1:770570755340:web:78d10757d873d1aefebd29",
    measurementId: "G-56PDBL6SL4"
  });

   const db = firebaseApp.firestore();

   export default db;

