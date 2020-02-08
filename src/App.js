import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing}></Route>
    </BrowserRouter>
  );
}

export default App;
