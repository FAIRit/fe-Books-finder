// import React from "react";


// import LandingPage from "../LandingPage/LandingPage";
// import Logged from "../Login/Logged";
// import About from "../About/About";
// import BookCards from "../Search/BookCardsChildren";
// import RegisterBox from "../Login/RegisterBox";
// // import MultipleSelect from '../Search/MultipleSelect';
// import ChooseCategory from "../Search/ChooseCategory";
// import IconButton from "@material-ui/core/IconButton";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   NavLink,
//   Redirect
// } from "react-router-dom";

// import Button from "@material-ui/core/Button";


// // const options = ["Home", "Wyszukaj", "Panel użytkownika"];

// const ITEM_HEIGHT = 48;

// const  Nav = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = event => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//       <div>
//         <IconButton
//           aria-label="more"
//           aria-controls="long-menu"
//           aria-haspopup="true"
//           onClick={handleClick}
//         >
//           <MoreVertIcon />
//         </IconButton>
//         <Menu
//           id="long-menu"
//           anchorEl={anchorEl}
//           keepMounted
//           open={open}
//           onClose={handleClose}
//           PaperProps={{
//             style: {
//               maxHeight: ITEM_HEIGHT * 4.5,
//               width: 150
//             }
//           }}
//         >
//           </Menu>
//           {/* {options.map(option => (
//             <MenuItem
//               key={option}
//               selected={option === "Home"}
//               onClick={handleClose}
//             >
//               {option}
//             </MenuItem>
//           ))} */}
          
//           </div>
//   )
// }



// export default Nav;