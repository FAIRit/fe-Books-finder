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
                    <Container component="main" maxWidth="xs">
                            <div style={{marginTop: 50, textAlign: "center"}}>
                                <Typography component="h1" variant="h5">
                                    {this.props.isSignUp ? 'Zarejestruj się' : 'Zaloguj się'}
                                </Typography>
                                <form noValidate onSubmit={this.handleOnSubmit}>
                                    <TextField
                                        variant="outlined"
                                        color= "primary"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="adres e-mail"
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
                                        label="hasło"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={this.state.password}
                                        onChange={this.handleOnChange}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Zapamiętaj mnie"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        style = {{backgroundColor:'#6C63FF', marginBottom:10}}
                                    >
                                        {this.props.isSignUp ? 'Zarejestruj' : 'Zaloguj'}
                                    </Button>
                                    {
                                        this.props.isSignUp
                                            ? <Link to="/sign-in">Masz konto? Zaloguj się</Link>
                                            : <Link to="/sign-up">Nie masz konta? Zarejestruj się</Link>
                                    }
                                </form>
                            </div>
                        </Container>;
            </>
        );
    }
}

export default Sign;