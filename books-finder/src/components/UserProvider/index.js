import React from 'react';
import firebase from "firebase";

class UserProvider extends React.Component {
    state = {
        user: null,
        ref: null
    };

    componentDidMount() {
        const ref = firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user })
        });

        this.setState({ ref })
    }

    componentWillUnmount() {
        this.state.ref();
    }


    render() {
        return this.props.children(this.state.user)
    }
}

export default UserProvider;