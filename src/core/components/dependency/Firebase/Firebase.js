import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLvMlyNu41oB6oZBAvl7jqq51Oz8bXVsQ",
    authDomain: "linkedin-clone-prashe911.firebaseapp.com",
    projectId: "linkedin-clone-prashe911",
    storageBucket: "linkedin-clone-prashe911.appspot.com",
    messagingSenderId: "882025336256",
    appId: "1:882025336256:web:433aff399241837e648c25"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.fireStore();
  const auth = firebase.auth();

  export {db , auth};