import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNl0OYCD3aRCKJv2g2KHuk5ctwIQNZ9PE",
  authDomain: "filter-2ea96.firebaseapp.com",
  databaseURL: "https://filter-2ea96.firebaseio.com",
  projectId: "filter-2ea96",
  storageBucket: "filter-2ea96.appspot.com",
  messagingSenderId: "792060818849",
  appId: "1:792060818849:web:1b6626a8b24b73e0d547e0",
  measurementId: "G-NVHQKGGJ4Q"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
