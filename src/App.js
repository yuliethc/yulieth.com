import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewLanding from "./New/NewLanding";
import About from "./New/About";
import Resume from "./New/Resume";
import Services from "./New/Services";
import Portfolio from "./New/Portfolio";
import PortfolioDetail from "./New/components/PortfolioDetail";
import Contact from "./New/Contact";
import Landing from "./Pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={NewLanding}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/resume" component={Resume}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route
          exact
          path="/portfolio/detail"
          component={PortfolioDetail}
        ></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route component={Landing}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
