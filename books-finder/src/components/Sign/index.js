import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import firebase from 'firebase';
import {Redirect} from "react-router";
import {Link} from 'react-router-dom';
import UserProvider from "../UserProvider";
import Navigation from "../Navigation/";

class Sign extends Component {
    state = {
        email: '',
        password: '',
        redirect: false
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    // handleOnSubmit = (event) => {
    //     event.preventDefault();
    // const db = firebase.firestore();
    // db.settings({
    //   timestampsInSnapshots: true
    // });
    // this.setState()

    // const userRef = db.collection(“users”).add({
    //   password: this.state.pasword,
    //   email: this.state.email
    // });  
    handleOnSubmit = (event) => {
        event.preventDefault();

        if (this.props.isSignUp) {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    this.setState({
                        redirect: true
                    })
                })
                .catch(function(error) {
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        } else {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    this.setState({
                        redirect: true
                    })
                })
                .catch(function(error) {
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to="/books" />
        }

        return (
            <>
            <UserProvider>
                {(user) => {
                    return user
                    ? <h2 style={{textAlign: "center", marginTop: 20}}>You are already logged in!</h2>
                    : <Container component="main" maxWidth="xs">
                            <div style={{marginTop: 30, textAlign: "center"}}>
                                <Typography component="h1" variant="h5">
                                    {this.props.isSignUp ? 'Sign up' : 'Sign in'}
                                </Typography>
                                <form noValidate onSubmit={this.handleOnSubmit}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={this.state.email}
                                        onChange={this.handleOnChange}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={this.state.password}
                                        onChange={this.handleOnChange}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                    >
                                        {this.props.isSignUp ? 'Sign up' : 'Sign in'}
                                    </Button>
                                    {
                                        this.props.isSignUp
                                            ? <Link to="/sign-in">Do you have an account? Sign In</Link>
                                            : <Link to="/sign-up">Don't have an account? Sign Up</Link>
                                    }
                                </form>
                            </div>
                        </Container>;
                }}
            </UserProvider>
            </>
        );
    }
}

export default Sign;