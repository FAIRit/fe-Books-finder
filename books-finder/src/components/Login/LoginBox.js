import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./LoginBox.css";

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  routeChange = () => {
    this.setState({
     redirect: true
    });
  }
//   onSubmit = () => {
//     if(userFound){
//         return  <Redirect  to="./Logged.js" />
//     }
//  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to= "./RegisterBox.js" />
    }
  }
  render() {
    return (
      <>
        <div className="login-and-register-container">
          <div className="inner-container">
            <div className="header">Login</div>
            <div className="box">
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="login-input"
                  placeholder="Username"
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="login-input"
                  placeholder="Password"
                />
              </div>

              <button type="button" className="login-btn"
              // onClick = {this.onSubmit}>
              >
                Zaloguj
              </button>
        
            </div>
          </div>
          <div className="register-text">
            <p>Jestem tu nowy, zarejestruj mnie</p>
          </div>
          <div>
          {this.renderRedirect()}
          <button
            type="button"
            className="register-btn"
            onClick={this.setRedirect}
          >
            Zarejestruj się
          </button>
          
         
        </div>
        </div>
      </>
    );
  }
}


export default LoginBox;
