import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NewLanding from "./New/NewLanding";
import About from "./New/About";
import Resume from "./New/Resume";
// import Landing from "./Pages/Landing";

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/" component={Landing}></Route> */}      
      <Route exact path="/" component={NewLanding}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/resume" component={Resume}></Route>

    </BrowserRouter>
  );
}

export default App;
