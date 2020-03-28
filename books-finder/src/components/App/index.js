// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Navigation from '../Navigation';
// const App = () => (
//   <Router>
//     <Navigation />
//   </Router>
// );
// export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Login/Navigation";
import LandingPage from "../Login/Landing";
import SignUpPage from "../Login/SignUp";
import SignInPage from "../Login/SignIn";
import PasswordForgetPage from "../Login/PasswordForget";
import List from "../Books/List";
import HomePage from "../Login/Home";
import AccountPage from "../Login/Account";
import AdminPage from "../Login/Admin";
import * as ROUTES from "../Login/constans/routes";
import { withFirebase } from '../Login/Firebase';
import { withAuthentication } from '../Login/Session';

const App =() => (
  
      <Router>
        <div>
          <Navigation />
          <hr />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.LIST} component={List} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
);

export default withAuthentication (App);
