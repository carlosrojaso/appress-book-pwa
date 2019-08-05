import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/messaging';

let config = {
  apiKey: "AIzaSyDT2_jZiasDK017UicoakK1gn93FIZnJ5o",
  authDomain: "appress-book-pwa.firebaseapp.com",
  databaseURL: "https://appress-book-pwa.firebaseio.com",
  projectId: "appress-book-pwa",
  storageBucket: "",
  messagingSenderId: "217988350403",
  appId: "1:217988350403:web:cd5e278739086fd1"
};

export const fireApp = firebase.initializeApp(config);