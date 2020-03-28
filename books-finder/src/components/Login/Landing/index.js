import React, {Component, Link, Redirect }  from 'react';
import './Landing.css';
import SignInPage from "../SignIn";
import { SignInForm } from "../SignIn";
import { Button } from '@material-ui/core';
import * as ROUTES from '../constans/routes';


class Landing extends Component {
  constructor() {
    super();
  }
  //   this.state ({
  //     // redirect: false,
  //   })
  // }

  //   goToSignIn = () => {
  //     this.setState ({
  //       redirect: true,
  //     })
  // }
  render () {
    // const redirect = this.state.redirect;
    // if (redirect=== true) {
    //     <Redirect to='/signin'/>
    // }
  return (
    <>
       <div>
            <img className = "main-picture"src = "images/101722-OM1D1L-865.jpg" alt="Ilustracja szczęśliwej rodziny" />
        </div>
        <div >
            <img className = "logo" src = "images/logo.jpg" />
        </div>
        <Button>
          Zaczynamy
        </Button>

        <SignInPage />

        </>
  );
};
}

export default Landing;

