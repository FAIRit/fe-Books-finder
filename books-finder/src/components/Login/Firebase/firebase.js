import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
// const prodConfig = {
//     apiKey:process.env."AIzaSyCH9b51lHB7S584hu-6zSoaLo_f57hX5fk",
//     authDomain:process.env. "books-project-5acdb.firebaseapp.com",
//     databaseURL:process.env. "https://books-project-5acdb.firebaseio.com",
//     projectId:process.env. "books-project-5acdb",
//     storageBucket:process.env. "books-project-5acdb.appspot.com",
//     messagingSenderId:process.env. "556805789478",
//     appId:process.env. "1:556805789478:web:365abf6a20f201a21993e7",
//     measurementId:process.env. "G-9C3ZS4SQJG",
//   };
//   const devConfig = {
//     apiKey:process.env. "AIzaSyCH9b51lHB7S584hu-6zSoaLo_f57hX5fk",
//     authDomain:process.env. "books-project-5acdb.firebaseapp.com",
//     databaseURL:process.env. "https://books-project-5acdb.firebaseio.com",
//     projectId:process.env. "books-project-5acdb",
//     storageBucket:process.env. "books-project-5acdb.appspot.com",
//     messagingSenderId:process.env. "556805789478",
//     appId:process.env. "1:556805789478:web:365abf6a20f201a21993e7",
//     measurementId:process.env. "G-9C3ZS4SQJG",
//   };

//   const config =
//   process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

// const config = {
//   apiKey: "AIzaSyCH9b51lHB7S584hu-6zSoaLo_f57hX5fk",
//   authDomain: "books-project-5acdb.firebaseapp.com",
//   databaseURL: "https://books-project-5acdb.firebaseio.com",
//   projectId: "books-project-5acdb",
//   storageBucket: "books-project-5acdb.appspot.com",
//   messagingSenderId: "556805789478",
//   appId: "1:556805789478:web:365abf6a20f201a21993e7",
//   measurementId: "G-9C3ZS4SQJG"
// };

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");


}
export default Firebase;
