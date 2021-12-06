// Import firebase
import firebase from "firebase";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration, you have to paste here the object that comes from firebase
const firebaseConfig = {
  apiKey: "AIzaSyAbuuZlN9VeroRfMxd14EC-1tVwhbQWdCM",
  authDomain: "dmi-gastos.firebaseapp.com",
  databaseURL: "https://dmi-gastos-default-rtdb.firebaseio.com",
  projectId: "dmi-gastos",
  storageBucket: "dmi-gastos.appspot.com",
  messagingSenderId: "1001296994328",
  appId: "1:1001296994328:web:ae6ae5cd5707ae6be4e36d",
  measurementId: "G-G92YVZM5E5"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  console.info({ firebase });
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const database = firebase.database()

export { auth, database };
