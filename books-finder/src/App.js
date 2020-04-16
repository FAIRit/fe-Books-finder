import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import Navigation from "./components/Navigation/";
import Content from "./components/Content";
import Landing from "./components/Landing";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme.js";

function App() {
  return (
     <Router>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Landing/> 
      <Content />
      <Navigation />
      </ThemeProvider>  
    </Router>
  
  );
}

export default App;
