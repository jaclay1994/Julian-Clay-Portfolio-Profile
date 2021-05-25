import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import Main from "./pages/main";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio"


function App() {
  return (
    <Router>
      <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
    </Router>
  );
}

export default App;
