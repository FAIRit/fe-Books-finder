import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import firebase from "firebase";
import UserProvider from "../UserProvider";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/icons/Link";
import { Avatar } from "@material-ui/core";



const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  appBar: {
width:'100%',
backgroundColor:"#00b0ff"
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#00b0ff"
  },
}));



export default () => {
    const classes = useStyles();

    const handleBackHome = () => {
      window.location = "/";
    };
  
    const handleSignOut = () => {
      firebase.auth().signOut();
      window.location = "/";
    };

    return (
        <UserProvider >
        {user => {
          return (
            <AppBar
              className={classes.appBar}
            >
              {user && (
                <Toolbar style={{ justifyContent: "flex-end" }}>
                       {user && <Avatar color="primary" style = {{marginRight:30}} />}
  {user ? (
        <Button
        size="large"
        style={{marginRight:20}}
          onClick={handleSignOut}
        >
          Wyloguj się
        </Button>
      ) : (
        <Link to="/sign-in">
          <Button variant="contained" color="secondary">
            Zaloguj się
          </Button>
        </Link>
      )}
    </Toolbar>
    )}
  </AppBar>
          )
      }}
 </UserProvider >
 )}

