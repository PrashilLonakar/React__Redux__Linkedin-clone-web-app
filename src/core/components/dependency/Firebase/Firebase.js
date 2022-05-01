import firebase from 'firebase';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLvMlyNu41oB6oZBAvl7jqq51Oz8bXVsQ",
    authDomain: "linkedin-clone-prashe911.firebaseapp.com",
    projectId: "linkedin-clone-prashe911",
    storageBucket: "linkedin-clone-prashe911.appspot.com",
    messagingSenderId: "882025336256",
    appId: "1:882025336256:web:433aff399241837e648c25"
  };

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };