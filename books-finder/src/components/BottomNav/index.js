import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles({
  root: {
    width: "100%",
    top: "auto",
    bottom: 0,
    backgroundColor: "#00b0ff"
  },
  appBar: {
    top: "auto",
    bottom: 0,
    width: "100%",
    position: "fixed"
  }
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className = "main-container">
    <AppBar position="fixed" className={classes.appBar}>
            < BottomNavigation
      value={value}
      onChange={(event, newValue) => {
      setValue(newValue);
      }}
      showLabels
      className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          to="/books"
          label="Wyszukaj"
          value="books"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/clinics"
          label="Poradnie"
          value="clinics"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/userpanel"
          label="Twój profil"
          value="userpanel"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
      </AppBar> 
      </div>
  );
} 
