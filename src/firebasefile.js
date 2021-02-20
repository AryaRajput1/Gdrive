import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAEkHNdZHpDj_2igMi6anIIyfpxtxgMj4w",
    authDomain: "gdrive-c25ec.firebaseapp.com",
    projectId: "gdrive-c25ec",
    storageBucket: "gdrive-c25ec.appspot.com",
    messagingSenderId: "528197300101",
    appId: "1:528197300101:web:8706af3dc79e2bc5c51eec"
  };
  
  const FirebaseApp=firebase.initializeApp(firebaseConfig);
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  const db =firebase.firestore();
  const storage =firebase.storage();

  export default auth;
  export {provider,db , storage}
