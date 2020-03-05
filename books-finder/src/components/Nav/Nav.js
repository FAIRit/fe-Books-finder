import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import Logged from "../Login/Logged";
import About from "../About/About";
import BookCards from "../Search/BookCardsChildren";
import RegisterBox from "../Login/RegisterBox";
// import MultipleSelect from '../Search/MultipleSelect';
import ChooseCategory from "../Search/ChooseCategory";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

// import Button from "@material-ui/core/Button";

// import "./Nav.css";

// const Nav = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <nav>
//               <NavLink activeClassName="nav-active" to="/menu">
//               <i class="fa fa-bars"></i>MENU
//               </NavLink>
//               <ul>
//             <li>
//               <NavLink activeClassName="nav-active" to="/about">
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink activeClassName="nav-active" to="/Logged">
//                 Logged
//               </NavLink>
//             </li>
//             <li>
//               <NavLink activeClassName="nav-active" to="/RegisterBox">
//                 RegisterBox
//               </NavLink>
//             </li>
//             <li>
//               <NavLink activeClassName="nav-active" to="/BookCards">
//                 BookCards
//               </NavLink>
//             </li>
//             {/* <li>
//               <NavLink activeClassName="nav-active" to="/MultipleSelect">
//                 MultipleSelect
//               </NavLink>
//             </li>  */}
//             <li>
//               <NavLink activeClassName="nav-active" to="/ChooseCategory">
//               ChooseCategory
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//         <div className="container">
//           <Switch>
//             {/* <Route path="/about" component={About} /> */}
//             {/* <Route path="/">
//             <Home />
//           </Route> */}
//             {/* <Route path="/Logged">
//             <Logged />
//             </Route> */}
//              <Route path="/About">
//              <About />
//             </Route>
//             <Route path="/BookCards">
//              <BookCards />
//             </Route >
//             <Route path="/RegisterBox">
//               <RegisterBox />
//             </Route >
//             {/* <Route path="/MultipleSelect">
//               <MultipleSelect />
//             </Route > */}
//             <Route path="/ChooseCategory">
//               <ChooseCategory/>
//             </Route >
//              {/* <Route exact path="/">
//               <Home />
//             </Route > */}
//           </Switch>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default Nav;

// const options = ["Home", "Wyszukaj", "Panel użytkownika"];

const ITEM_HEIGHT = 48;

 function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BrowserRouter>
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 150
            }
          }}
        >
          {/* {options.map(option => (
            <MenuItem
              key={option}
              selected={option === "Home"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))} */}
          {/* <NavLink to="/Home">Home</NavLink> */}

          <NavLink to="/ChooseCategory">Wyszukaj</NavLink>
          <NavLink to="/Logged">Panel użytkownika</NavLink>
          {/* <NavLink to="/">Strona główna</NavLink> */}
        </Menu>
      </div>
      <Switch>
        {/* <Route path="/">
          <Home />
        </Route> */}
         <Route path="/Logged">
          <Logged />
        </Route >
        <Route path="/ChooseCategory">
          <ChooseCategory />
        </Route >
      </Switch>
    </BrowserRouter>
  );
}

export default Nav;