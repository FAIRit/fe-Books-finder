import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation/";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <Home /> 
      <Content />
      <Navigation />
    </Router>
  );
}

export default App;
