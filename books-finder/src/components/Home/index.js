import React, { Component } from "react";
import styles from "./Home.module.css";
import { Redirect } from "react-router";


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

            <div className={styles.landing}>
              <img
                className={styles.mainPicture}
                src="images/undraw_book_lover_mkck.svg"
                alt="Ilustracja"
              />
            </div>
          );
        }}
        

export default Home;
