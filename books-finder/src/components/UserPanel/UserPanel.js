import React from "react";
import { Grid } from "@material-ui/core";
// import ProfilePanel from "./ProfilePanel";
// import CuriosityPanel from "./CuriosityPanel";
// import CharityPanel from "./CharityPanel";
import FavouriteBooksPanel from "./FavouriteBooksPanel";

const UserPanel = ({favouriteBooks}) => {
  return (
    <div className="main-container">
   
        {/* <Grid item xs={12} sm={4}>
          <ProfilePanel />
        </Grid> */}
        {/* <Grid item sm={8} xs={12}>
          <CuriosityPanel/>
        </Grid>
        <Grid item xs={12}>
          <CharityPanel/>
        </Grid> */}
        
          <FavouriteBooksPanel favouriteBooks={favouriteBooks}/>
      </div>
  );
};

export default UserPanel;
