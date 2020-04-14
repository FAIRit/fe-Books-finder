import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import firebase from "firebase";
import styles from "./Navigation.module.css";
import UserProvider from "../UserProvider";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import Link from "@material-ui/icons/Link";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BottomNav from "../BottomNav";
import Home from "../Home";
import { IconButton } from "@material-ui/core";
import { Avatar } from "@material-ui/core";



const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex"
//   },
//   drawer: {
//     [theme.breakpoints.up("sm")]: {
//       width: drawerWidth,
//       flexShrink: 0,
      
//     },
//   },

  appBar: {
    // [theme.breakpoints.up("sm")]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth
    // },
width:'100%',
backgroundColor:"#00b0ff"
  },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up("sm")]: {
//       display: "none"
//     }
//   },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#00b0ff"
  },

//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3)
//   }
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
          variant="contained"
          color="secondary"
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
      {/* <IconButton>
      <Link
      onClick={handleBackHome}>
        <HomeIcon />
      </Link>
      </IconButton> */}
    </Toolbar>
    )}
  </AppBar>
          )
      }}
 </UserProvider >
 )}

