import React, { Component } from "react";
import { Button } from "@material-ui/core";
import styles from "./Home.module.css";
import { Redirect } from "react-router";
import UserProvider from "../UserProvider";

class Home extends Component {
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

              {user ? null : (
                <Button onClick={this.handleOnSubmit}>Zaczynamy</Button>
              )}
              {/* {user ? <Redirect to="/books" /> : <Redirect to="/sign-in" />} */}
            </div>
          );
        }}
        
      </UserProvider>
  
    );
  }
}

export default Home;
