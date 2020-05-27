import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NewLanding from "./New/NewLanding";
// import Landing from "./Pages/Landing";

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/" component={Landing}></Route> */}      
      <Route path="/" component={NewLanding}></Route>
    </BrowserRouter>
  );
}

export default App;
