// import React from "react";
// import { Grid } from "@material-ui/core";
// // import ProfilePanel from "./ProfilePanel";
// // import CuriosityPanel from "./CuriosityPanel";
// // import CharityPanel from "./CharityPanel";
// import FavouriteBooksPanel from "./FavouriteBooksPanel";

// const UserPanel = ({favouriteBooks}) => {
//   return (
//     <>
//       <Grid container spacing={3}>
//         {/* <Grid item xs={12} sm={4}>
//           <ProfilePanel />
//         </Grid> */}
//         {/* <Grid item sm={8} xs={12}>
//           <CuriosityPanel/>
//         </Grid>
//         <Grid item xs={12}>
//           <CharityPanel/>
//         </Grid> */}
//         <Grid item xs={12}>
//           <FavouriteBooksPanel favouriteBooks={favouriteBooks}/>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default UserPanel;

import React from 'react';
import PageWrapper from "../PageWrapper";
import placeholder from "../../logo.svg"
import firebase from "firebase";
import FavouriteBooksPanel from "./FavouriteBooksPanel";

class UserPanel extends React.Component {
    state = {
        file: null,
        url: '',
        ref: null,
        user: null
    };

    componentDidMount() {
        const ref = firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user });
            this.fetchAvatarUrl();
        });

        this.setState({ ref })
    }

    componentWillUnmount() {
        this.state.ref();
    }

    handleOnChange = (event) => {
        this.setState({
            file: event.target.files[0]
        })
    };

    handleOnClick = () => {
        firebase.storage().ref(`avatars/${this.state.user.uid}`)
            .put(this.state.file)
            .then(() => {
                this.fetchAvatarUrl();
            });
    };

    fetchAvatarUrl = () => {
        firebase.storage().ref(`avatars/${this.state.user.uid}`).getDownloadURL()
            .then(url => {
                this.setState({
                    url
                })
            })
    };

    render() {
        return this.state.user
            && <PageWrapper title="Panel użytkownika">
                    {`Hello ${this.state.user.email}!`}
                    <div style={{marginTop: 20}}>
                        <img style={{width: 100}} src={this.state.url || placeholder} alt="avatar"/>
                        <input type="file" onChange={this.handleOnChange} />
                        <button onClick={this.handleOnClick}>Add avatar</button>
                    </div>
                </PageWrapper>
            }
}

export default UserPanel;