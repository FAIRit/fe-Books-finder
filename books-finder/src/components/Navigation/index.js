import React from "react";
import { NavLink as Link } from "react-router-dom";
import firebase from "firebase";
import styles from "./Navigation.module.css";
import UserProvider from "../UserProvider";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BottomNav from "../BottomNav";
import Home from "../Home";
import { IconButton } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";
import PersonIcon from "@material-ui/icons/Person";
import InfoIcon from "@material-ui/icons/Info";
import TopBar from "./TopBar";
import '../../App.css';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  //   appBar: {
  //     [theme.breakpoints.up("sm")]: {
  //       width: `calc(100% - ${drawerWidth}px)`,
  //       marginLeft: drawerWidth
  //     }
  //   },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  list: {
    paddingTop: 100
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#00b0ff"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function Navigation() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isNotMobile = useMediaQuery("(min-width:601px)");
  const isMobileVertical = useMediaQuery("(min-height:600px)");

  //   const handleBackHome = () => {
  //     window.location = "/";
  //   };

  //   const handleSignOut = () => {
  //     firebase.auth().signOut();
  //     window.location = "/";
  //   };

  return (
    <>
      <TopBar />
      <UserProvider>
        {/* {isMobile? "main-container": "main-container.small"} */}
        {user => {
          return (
            <>
            <div 
            // className = {styles.bigContainer}
            >
              {isNotMobile && user && (
                <Drawer
                  className={classes.drawer}
                  variant="permanent"
                  classes={{
                    paper: classes.drawerPaper
                  }}
                >
                  <List className={classes.list}>
                    {user && (
                      <ListItem
                        component={Link}
                        to="/books"
                        //  value= "KSIĄŻKI"
                        button
                      >
                        <ListItemIcon>
                          <SearchIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText>KSIĄŻKI</ListItemText>
                      </ListItem>
                    )}
                    {user && (
                      <ListItem component={Link} to="/clinics" button>
                        <ListItemIcon>
                          <RoomIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText>PORADNIE</ListItemText>
                      </ListItem>
                    )}
                    {user && (
                      <ListItem component={Link} to="/userpanel" button>
                        <ListItemIcon>
                          <PersonIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText>TWÓJ PROFIL</ListItemText>
                      </ListItem>
                    )}
                    {user && (
                      <ListItem component={Link} to="/aboutus" button>
                        <ListItemIcon>
                          <InfoIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText>O NAS</ListItemText>
                      </ListItem>
                    )}
                  </List>
                </Drawer>
                )}
                  </div>
              
                <div
                //  className={styles.smallContainer}
                 >
      { isMobile && user  && (
      <BottomNav />
      )}
       </div>
       </>
           ) }}
      </UserProvider>
    </>
  );
}
export default Navigation;
