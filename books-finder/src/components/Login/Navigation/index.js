import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../constans/routes';
import { AuthUserContext } from '../Session';
import { AppBar } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';

const Navigation = () => (
  <div>
      <AppBar position="static"
      >
      
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
</AppBar>
  </div>
);


const NavigationAuth = () => (

  <ul>
    <li>
      <Link to={ROUTES.LANDING}><HomeIcon/></Link>
    </li>
    {/* <li>
      <Link to={ROUTES.HOME}></Link>
    </li> */}
    <li>
      <Link to={ROUTES.ACCOUNT}><PersonIcon /></Link>
    </li>
    <li>
      <Link to={ROUTES.LIST}><SearchIcon/></Link>
    </li>
    {/* <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li> */}
    <li>
      <SignOutButton />
    </li>
  </ul>
);
const NavigationNonAuth = () => (
  <ul>
    {/* <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li> */}
    {/* <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li> */}
  </ul>

);

export default Navigation;