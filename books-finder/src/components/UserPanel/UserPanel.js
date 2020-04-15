import React from "react";
import { Grid } from "@material-ui/core";
import FavouriteBooksPanel from "./FavouriteBooksPanel";

const UserPanel = ({favouriteBooks}) => {
  return (
    <div className="main-container">

        
          <FavouriteBooksPanel favouriteBooks={favouriteBooks}/>
      </div>
  );
};

export default UserPanel;
