import React from "react";
import FavouriteBooksPanel from "./FavouriteBooksPanel";

const UserPanel = ({favouriteBooks}) => {
  return (
    <div className="main-container">

        
          <FavouriteBooksPanel favouriteBooks={favouriteBooks}/>
      </div>
  );
};

export default UserPanel;
