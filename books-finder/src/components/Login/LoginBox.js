import React, { Component} from "react";
import { Link, withRouter } from "react-router-dom";
import './LoginBox.css';

class LoginBox extends Component {
constructor  (props) {
  super(props);
  this.state = {
route: './'
  };

}
routeChange =() => {
this.setState ({
route: './RegisterBox.js'
  })

}

  render() {
  return (
    <>
    <div className = "login-and-register-container">
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

          {/* <button
            type="button"
            className="login-btn"
            onClick={this
            .submitLogin
            .bind(this)}>Login</button> */}
      
          <button type="button" className="login-btn">
Zaloguj
</button>
            {/* onClick={this
            .submitLogin
            .bind(this)}>Zaloguj</button> */}
        </div>
      </div>
      <div className="register-text">
        <p>Jestem tu nowy, zarejestruj mnie</p>
      </div>
      <button
        type="button"
        className="register-btn"
        onClick={this.routeChange}
        >
                Zarejestruj się
      </button>
      </div>
    </>
  )
}
}

export default LoginBox;
