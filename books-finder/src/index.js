// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();

// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
// } from 'react-router-dom';
// import Navigation from './components/Navigation';
// import LandingPage from './components/Landing';
// import SignUpPage from './components/SignUp';
// import SignInPage from './components/SignIn';
// import PasswordForgetPage from './components/PasswordForget';
// import HomePage from './components/Home';
// import AccountPage from './components/Account';
// import AdminPage from './components/Admin';
// import * as ROUTES from './constans/routes';

// const App = () => (
//   <Router>
//     <div>
//       <Navigation />
//       <hr />
//       <Route exact path={ROUTES.LANDING} component={LandingPage} />
//       <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
//       <Route path={ROUTES.SIGN_IN} component={SignInPage} />
//       <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
//       <Route path={ROUTES.HOME} component={HomePage} />
//       <Route path={ROUTES.ACCOUNT} component={AccountPage} />
//       <Route path={ROUTES.ADMIN} component={AdminPage} />
//     </div>
//   </Router>
// );
// export default App;



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Login/Firebase';
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
serviceWorker.unregister();