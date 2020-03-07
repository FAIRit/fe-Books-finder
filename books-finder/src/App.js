import React from 'react';
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ChooseCategory from "./components/Search/ChooseCategory";
import Logged from "./components/Login/Logged";
import MultipleSelect from "./components/Search/MultipleSelect";



function App() {
  return (
  <div className="app">
      <BrowserRouter>
        <div className={'tabs'}>
          <NavLink to="/">Strona główna</NavLink>
          <NavLink to="/ChooseCategory">Wyszukaj</NavLink>
          <NavLink to="/Logged">Panel użytkownika</NavLink>
          {/* <NavLink to="/MultipleSelect">Filtr</NavLink> */}
      </div>
      <div className = "container">
      <Switch>
        <Route path="/" exact={true} component ={LandingPage}/>
         <Route path="/Logged" exact={true} component ={Logged} />
        <Route path="/ChooseCategory" exact={true} component = {ChooseCategory} />
        {/* <Route path="/MultipleSelect" exact={true} component ={MultipleSelect} /> */}
      </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
