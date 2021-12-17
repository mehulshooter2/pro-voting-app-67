import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC_zpnjVtP9XHYXq8TgOwXOAKx_7QHb57Q",
  authDomain: "team-voting-2599c.firebaseapp.com",
  projectId: "team-voting-2599c",
  storageBucket: "team-voting-2599c.appspot.com",
  messagingSenderId: "196307830529",
  appId: "1:196307830529:web:78771ca951a5c4647efd00"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();