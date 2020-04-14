
// import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
// import { NavLink as Link } from "react-router-dom";
// import Toolbar from "@material-ui/core/Toolbar";
// import firebase from "firebase";
// import styles from "./Navigation.module.css";
// import UserProvider from "../UserProvider";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import HomeIcon from "@material-ui/icons/Home";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import BottomNav from "../BottomNav";
// import Home from "../Home";
// import { IconButton } from "@material-ui/core";
// import { Avatar } from "@material-ui/core";
// import UserProvider from"../UserProvider";


// export default () => {


//     return (
//         <UserProvider>
//         {user => {
//           return (
//             <AppBar
//               className={classes.appBar}
//               // style={{ backgroundColor: user ? "#6C63FF" : "FFFFFF" }}
//             >
//               {user && (
//                 <Toolbar style={{ justifyContent: "flex-end" }}>
//                        {user && <Avatar color="primary" />}

//   {user ? (
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={handleSignOut}
//         >
//           Wyloguj się
//         </Button>
//       ) : (
//         <Link to="/sign-in">
//           <Button variant="contained" color="secondary">
//             Zaloguj się
//           </Button>
//         </Link>
//       )}
//       <IconButton>
//       <Link to="/" onClick={handleBackHome}>
//         <HomeIcon color="primary"/>
//       </Link>
//       </IconButton>

//                     </Toolbar>
//               )}
//                     </AppBar>
//               }
//                     <UserProvider />
//           )
//             }


import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
// import { NavLink as Link } from "react-router-dom";
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
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },

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
    // const isMobile = useMediaQuery("(max-width:600px)");
    // const isNotMobile = useMediaQuery("(min-width:601px)");
    // const isMobileVertical = useMediaQuery("(min-height:600px)")
   

  
  
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
            //   style={{ backgroundStyle }}
            >
              {user && (
                <Toolbar style={{ justifyContent: "flex-end" }}>
                       {user && <Avatar color="primary" />}
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
      <IconButton>
      <Link to="/" onClick={handleBackHome}>
        <HomeIcon color="primary"/>
      </Link>
      </IconButton>
    </Toolbar>
    )}
  </AppBar>
          )
      }}
 </UserProvider >
 )}

