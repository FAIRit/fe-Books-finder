import React, { Component } from "react";
import { Button } from "@material-ui/core";
import styles from "./Landing.module.css";
import { Redirect } from "react-router";
import UserProvider from "../UserProvider";
import Logo from "./Logo";

class Landing extends Component {
  state = {
    redirect: false
  };
  handleOnSubmit = event => {
    this.setState({
      redirect: true
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/sign-in" />;
    }
    return (
       
      <UserProvider>
        {user => {
          return (
           <div className={styles.landing}>
              <img
                className={styles.mainPicture}
                src="images/undraw_book_lover_mkck.svg"
                alt="Ilusracja"
              />
              <div className= {styles.logoContainer}>
                <Logo />

              </div>

              {user ? null : (
                <Button style = {{color:'white'}}  size="large" onClick={this.handleOnSubmit}>Zaczynamy</Button>
              )}
            </div>
          );
        }}
       
      </UserProvider>
       
    );
  }
}

export default Landing;