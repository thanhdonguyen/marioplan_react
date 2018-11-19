    import firebase from 'firebase'
    import 'firebase/firestore'
    import 'firebase/auth'

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDQsJnRfa0pcSFSezmsZRu-xcx545iUBU0",
    authDomain: "marioplan-8ea35.firebaseapp.com",
    databaseURL: "https://marioplan-8ea35.firebaseio.com",
    projectId: "marioplan-8ea35",
    storageBucket: "marioplan-8ea35.appspot.com",
    messagingSenderId: "7718817078"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;