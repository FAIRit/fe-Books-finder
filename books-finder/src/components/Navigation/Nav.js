
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

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex"
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     backgroundColor:"#6C63FF"
//   },
//   drawer: {
//     width: "15vw",
//     flexShrink: 0,
//     minWidth: 150
//   },
//   drawerPaper: {
//     width: "15vw",
//     minWidth: 200,
//     backgroundColor: "#6C63FF"
//   },
//   drawerContainer: {
//     overflow: "auto"
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3)
//   }
// }));

// export default () => {
//   const classes = useStyles();
//   const isMobile = useMediaQuery("(max-width:600px)");
//   const isNotMobile = useMediaQuery("(min-width:601px)");
//   const isMobileVertical = useMediaQuery("(min-height:600px)");

//   const handleBackHome = () => {
//     window.location = "/";
//   };

//   const handleSignOut = () => {
//     firebase.auth().signOut();
//     window.location = "/";
//   };

//   return (
//     <>
//       <UserProvider>
//         {user => {
//           return (
//             <AppBar
//             className = {classes.appBar}
//             // style={{ backgroundColor: user ? "#6C63FF" : "FFFFFF" }}
//             >
//               {user && (
//                 <Toolbar style={{ justifyContent: "flex-end" }}>
//                   {isNotMobile && (
//                     <Drawer
//                       className={classes.drawer}
//                       variant="permanent"
//                       classes={{
//                         paper: classes.drawerPaper
//                       }}
//                     >
                      
//                       <List>
//                         <div>
//                           {/* <Link to="/">
//                       <ListItem button>STRONA GŁÓWNA</ListItem>
//                     </Link> */}
//                           {user && (
//                             <Link to="/bookslist">
//                               <ListItem>KSIĄŻKI</ListItem>
//                             </Link>
//                           )}
//                           {user && (
//                             <Link to="/clinics">
//                               <ListItem>PORADNIE</ListItem>
//                             </Link>
//                           )}
//                           {user && (
//                             <Link to="/userpanel">
//                               <ListItem>TWÓJ PROFIL</ListItem>
//                             </Link>
//                           )}
//                           {user && (
//                             <Link to="/aboutus">
//                               <ListItem>O NAS</ListItem>
//                             </Link>
//                           )}
//                         </div>
//                       </List>
//                     </Drawer>
//                   )}
//                   {user && <Avatar />}

//                   {user ? (
//                     <Button
//                       variant="contained"
//                       color="secondary"
//                       onClick={handleSignOut}
//                     >
//                       Wyloguj się
//                     </Button>
//                   ) : (
//                     <Link to="/sign-in">
//                       <Button variant="contained" color="secondary">
//                         Zaloguj się
//                       </Button>
//                     </Link>
//                   )}
//                   <Link to="/"  onClick = {handleBackHome}>
//                     <HomeIcon />
//                   </Link>
//                 </Toolbar>
//               )}
//             </AppBar>
//           );
//         }}
//       </UserProvider>
//       {isMobile && <BottomNav />}
//     </>
//   );
// };



// // import React from "react";
// // import AppBar from "@material-ui/core/AppBar";
// // import Button from "@material-ui/core/Button";
// // import { NavLink as Link } from "react-router-dom";
// // import Toolbar from "@material-ui/core/Toolbar";
// // import firebase from "firebase";
// // import styles from "./Navigation.module.css";
// // import UserProvider from "../UserProvider";
// // import { makeStyles, useTheme } from "@material-ui/core/styles";
// // import Drawer from "@material-ui/core/Drawer";
// // import List from "@material-ui/core/List";
// // import Typography from "@material-ui/core/Typography";
// // import Divider from "@material-ui/core/Divider";
// // import ListItem from "@material-ui/core/ListItem";
// // import ListItemIcon from "@material-ui/core/ListItemIcon";
// // import HomeIcon from "@material-ui/icons/Home";
// // import ListItemText from "@material-ui/core/ListItemText";
// // import InboxIcon from "@material-ui/icons/MoveToInbox";
// // import MailIcon from "@material-ui/icons/Mail";
// // import useMediaQuery from "@material-ui/core/useMediaQuery";
// // import BottomNav from "../BottomNav";
// // import Home from "../Home";
// // import { IconButton } from "@material-ui/core";
// // import { Avatar } from "@material-ui/core";

// // const useStyles = makeStyles(theme => ({
// //   root: {
// //     display: "flex"
// //   },
// //   appBar: {
// //     zIndex: theme.zIndex.drawer + 1,
// //     backgroundColor:"#6C63FF"
// //   },
// //   drawer: {
// //     width: "15vw",
// //     flexShrink: 0,
// //     minWidth: 150
// //   },
// //   drawerPaper: {
// //     width: "15vw",
// //     minWidth: 200,
// //     backgroundColor: "#6C63FF"
// //   },
// //   drawerContainer: {
// //     overflow: "auto"
// //   },
// //   content: {
// //     flexGrow: 1,
// //     padding: theme.spacing(3)
// //   }
// // }));

// // export default () => {
// //   const classes = useStyles();
// //   const isMobile = useMediaQuery("(max-width:600px)");
// //   const isNotMobile = useMediaQuery("(min-width:601px)");
// //   const isMobileVertical = useMediaQuery("(min-height:600px)");

// //   const handleBackHome = () => {
// //     window.location = "/";
// //   };

// //   const handleSignOut = () => {
// //     firebase.auth().signOut();
// //     window.location = "/";
// //   };

// //   return (
// //     <>
// //       <UserProvider>
// //         {user => {
// //           return (
// //             <AppBar
// //             className = {classes.appBar}
// //             // style={{ backgroundColor: user ? "#6C63FF" : "FFFFFF" }}
// //             >
// //               {user && (
// //                 <Toolbar style={{ justifyContent: "flex-end" }}>
// //                   {isNotMobile && (
// //                     <Drawer
// //                       className={classes.drawer}
// //                       variant="permanent"
// //                       classes={{
// //                         paper: classes.drawerPaper
// //                       }}
// //                     >
// //                       <List>
// //                         <div>
// //                           {/* <Link to="/">
// //                       <ListItem button>STRONA GŁÓWNA</ListItem>
// //                     </Link> */}
// //                           {user && (
// //                             <Link to="/bookslist">
// //                               <ListItem>KSIĄŻKI</ListItem>
// //                             </Link>
// //                           )}
// //                           {user && (
// //                             <Link to="/clinics">
// //                               <ListItem>PORADNIE</ListItem>
// //                             </Link>
// //                           )}
// //                           {user && (
// //                             <Link to="/userpanel">
// //                               <ListItem>TWÓJ PROFIL</ListItem>
// //                             </Link>
// //                           )}
// //                           {user && (
// //                             <Link to="/aboutus">
// //                               <ListItem>O NAS</ListItem>
// //                             </Link>
// //                           )}
// //                         </div>
// //                       </List>
// //                     </Drawer>
// //                   )}
// //                   {user && <Avatar />}

// //                   {user ? (
// //                     <Button
// //                       variant="contained"
// //                       color="secondary"
// //                       onClick={handleSignOut}
// //                     >
// //                       Wyloguj się
// //                     </Button>
// //                   ) : (
// //                     <Link to="/sign-in">
// //                       <Button variant="contained" color="secondary">
// //                         Zaloguj się
// //                       </Button>
// //                     </Link>
// //                   )}
// //                   <Link to="/"  onClick = {handleBackHome}>
// //                     <HomeIcon />
// //                   </Link>
// //                 </Toolbar>
// //               )}
// //             </AppBar>
// //           );
// //         }}
// //       </UserProvider>
// //       {isMobile && <BottomNav />}
// //     </>
// //   );
// // };

// //   return (
// //     <div className={classes.root}>
// //       <CssBaseline />
// //       <AppBar position="fixed" className={classes.appBar}>
// //         <Toolbar>
// //           <Typography variant="h6" noWrap>
// //             Clipped drawer
// //           </Typography>
// //         </Toolbar>
// //       </AppBar>
// //       <Drawer
// //         className={classes.drawer}
// //         variant="permanent"
// //         classes={{
// //           paper: classes.drawerPaper,
// //         }}
// //       >
// //         <Toolbar />
// //         <div className={classes.drawerContainer}>
// //           <List>
// //             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
// //               <ListItem button key={text}>
// //                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
// //                 <ListItemText primary={text} />
// //               </ListItem>
// //             ))}
// //           </List>
// //           <Divider />
// //           <List>
// //             {['All mail', 'Trash', 'Spam'].map((text, index) => (
// //               <ListItem button key={text}>
// //                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
// //                 <ListItemText primary={text} />
// //               </ListItem>
// //             ))}
// //           </List>
// //         </div>
// //       </Drawer>
// //       <main className={classes.content}>
// //         <Toolbar />
