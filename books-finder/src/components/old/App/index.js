// // import React from 'react';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // import Navigation from '../Navigation';
// // const App = () => (
// //   <Router>
// //     <Navigation />
// //   </Router>
// // );
// // export default App;

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navigation from "../Login/Navigation";
// import LandingPage from "../Login/Landing";
// import SignUpPage from "../Login/SignUp";
// import SignInPage from "../Login/SignIn";
// import PasswordForgetPage from "../Login/PasswordForget";
// import List from "../Books/List";
// import HomePage from "../Login/Home";
// import AccountPage from "../Login/Account";
// import AdminPage from "../Login/Admin";
// import * as ROUTES from "../Login/constans/routes";
// import { withFirebase } from '../Login/Firebase';
// import { withAuthentication } from '../Login/Session';

// const App =() => (
  
//       <Router>
//         <div>
//           <Navigation />
//           <hr />
//           <Route exact path={ROUTES.LANDING} component={LandingPage} />
//           <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
//           <Route path={ROUTES.SIGN_IN} component={SignInPage} />
//           <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
//           <Route path={ROUTES.HOME} component={HomePage} />
//           <Route path={ROUTES.ACCOUNT} component={AccountPage} />
//           <Route path={ROUTES.LIST} component={List} />
//           <Route path={ROUTES.ADMIN} component={AdminPage} />
//         </div>
//       </Router>
// );

// export default withAuthentication (App);

// .env

// REACT_APP_API_KEY="AIzaSyCH9b51lHB7S584hu-6zSoaLo_f57hX5fk"
// REACT_APP_AUTH_DOMAIN="books-project-5acdb.firebaseapp.com"
// REACT_APP_DATABASE_URL="https://books-project-5acdb.firebaseio.com"
// REACT_APP_PROJECT_ID= "books-project-5acdb"
// REACT_APP_STORAGE_BUCKET="books-project-5acdb.appspot.com"
// REACT_APP_MESSAGING_SENDER_ID=556805789478
// import firebase from "firebase";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCH9b51lHB7S584hu-6zSoaLo_f57hX5fk",
//     authDomain: "books-project-5acdb.firebaseapp.com",
//     databaseURL: "https://books-project-5acdb.firebaseio.com",
//     projectId: "books-project-5acdb",
//     storageBucket: "books-project-5acdb.appspot.com",
//     messagingSenderId: "556805789478",
//     appId: "1:556805789478:web:365abf6a20f201a21993e7"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);