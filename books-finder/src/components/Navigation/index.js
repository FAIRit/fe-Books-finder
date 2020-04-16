import React from "react";
import { NavLink as Link } from "react-router-dom";
import UserProvider from "../UserProvider";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BottomNav from "../BottomNav";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import RoomIcon from "@material-ui/icons/Room";
import PersonIcon from "@material-ui/icons/Person";
import TopBar from "./TopBar";
import SmallLogo from "./SmallLogo"

import "../../App.css";
const drawerWidth = '250';
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
  logo :{
    fill:'black'
  },
  logoContainer :{
    width:200,
    height:200
  },
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

  return (
    <>
      <TopBar />
      <div className="main-container">
        <UserProvider>
          {user => {
            return (
              <>
                  {isNotMobile && user && (
                    <Drawer
                      className={classes.drawer}
                      variant="permanent"
                      classes={{
                        paper: classes.drawerPaper
                      }}
                    >
                     <div className = {classes.logoContainer}>
             <Button href="/home">  
 <SmallLogo className = {classes.logo}/>
</Button>    
 </div>
 <List className={classes.list}>
                        {user && (
                          <ListItem
                            component={Link}
                            to="/books"
                            button
                          >
                            <ListItemIcon>
                              <SearchIcon />
                            </ListItemIcon>
                            <ListItemText>KSIĄŻKI</ListItemText>
                          </ListItem>
                        )}
                        {user && (
                          <ListItem component={Link} to="/clinics" button>
                            <ListItemIcon>
                              <RoomIcon />
                            </ListItemIcon>
                            <ListItemText>PORADNIE</ListItemText>
                          </ListItem>
                        )}
                        {user && (
                          <ListItem component={Link} to="/userpanel" button>
                            <ListItemIcon>
                              <PersonIcon />
                            </ListItemIcon>
                            <ListItemText>TWÓJ PROFIL</ListItemText>
                          </ListItem>
                        )}
                      </List>
                    </Drawer>
                  )}
                  {isMobile && user && <BottomNav />}
              </>
            );
          }}
        </UserProvider>
      </div>
    </>
  );
}
export default Navigation;
