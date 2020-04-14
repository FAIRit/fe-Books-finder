import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonIcon from "@material-ui/icons/Person";
import RestoreIcon from "@material-ui/icons/Restore";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import styles from "./BottomNav.module.css";
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

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <AppBar position="fixed" className={classes.appBar}>
            < BottomNavigation
      value={value}
      onChange={(event, newValue) => {
      setValue(newValue);
      }}
      showLabels
      className={classes.root}
      >
      {/* <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      > */}
        <BottomNavigationAction
          component={Link}
          to="/books"
          label="Wyszukaj"
          value="books"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/userpanel"
          label="Ulubione"
          value="favourites"
          icon={<FavoriteIcon />}
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
          label="Panel użytkownika"
          value="userpanel"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
      </AppBar> 
  );
} 



// export default function BottomNav() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   return (
//     <BottomNavigation
//       value={value}
//       onChange={(event, newValue) => {
//         setValue(newValue);
//       }}
//       showLabels
//       className={classes.root}
//     >
//       <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//       <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//       <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
//     </BottomNavigation>
//   );
// }