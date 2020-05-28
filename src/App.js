import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NewLanding from "./New/NewLanding";
import About from "./New/About";
// import Landing from "./Pages/Landing";

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/" component={Landing}></Route> */}      
      <Route exact path="/" component={NewLanding}></Route>
      <Route exact path="/about" component={About}></Route>

    </BrowserRouter>
  );
}

export default App;
