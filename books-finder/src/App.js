import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation/";
import Content from "./components/Content";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <Landing/> 
      <Content />
      <Navigation />
    </Router>
  );
}

export default App;
