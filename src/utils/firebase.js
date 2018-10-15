import firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCMhviOOUBEGafpS3WdOOY4UvomO0gRRcQ",
    authDomain: "github-dashboard-launchpadlab.firebaseapp.com",
    databaseURL: "https://github-dashboard-launchpadlab.firebaseio.com",
    projectId: "github-dashboard-launchpadlab",
    storageBucket: "github-dashboard-launchpadlab.appspot.com",
    messagingSenderId: "514721942176"
  };
  firebase.initializeApp(config);
  export default firebase;
