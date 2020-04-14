import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCH9b51lHB7S584hu-6zSoaLo_f57hX5fk",
    authDomain: "books-project-5acdb.firebaseapp.com",
    databaseURL: "https://books-project-5acdb.firebaseio.com",
    projectId: "books-project-5acdb",
    storageBucket: "books-project-5acdb.appspot.com",
    messagingSenderId: "556805789478",
    appId: "1:556805789478:web:365abf6a20f201a21993e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';
// import App from './components/App';
// import Firebase, { FirebaseContext } from './components/Login/Firebase';
// ReactDOM.render(
//   <FirebaseContext.Provider value={new Firebase()}>
//     <App />
//   </FirebaseContext.Provider>,
//   document.getElementById('root'),
// );
// serviceWorker.unregister();