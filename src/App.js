import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NewLanding from "./New/NewLanding";
import About from "./New/About";
import Resume from "./New/Resume";
import Services from "./New/Services";
// import Landing from "./Pages/Landing";

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/" component={Landing}></Route> */}      
      <Route exact path="/" component={NewLanding}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/resume" component={Resume}></Route>
      <Route exact path="/services" component={Services}></Route>

    </BrowserRouter>
  );
}

export default App;
