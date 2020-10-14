import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyB7uhBtkTWi40Dd1UVdG2uia2GGeLg1jJU",
  authDomain: "wily-recent.firebaseapp.com",
  databaseURL: "https://wily-recent.firebaseio.com",
  projectId: "wily-recent",
  storageBucket: "wily-recent.appspot.com",
  messagingSenderId: "157298268100",
  appId: "1:157298268100:web:6765856adb1c7c542db691"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()