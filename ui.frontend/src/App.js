import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import logo from "./images/logo.png";
import Home from "./components/Home";
import AdventureDetail from "./components/AdventureDetail/AdventureDetail";
import UserDetail from "./components/UserDetail/UserDetail";
import { Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
        <Link to={"/"}>
          <img src={logo} className="logo" alt="AEM SPA demo"/>
        </Link>        
        <hr/>
        </header>

        <Switch>
          <Route path='/user/:slug'>
            <UserDetail />
          </Route>
          <Route path='/adventure/:slug'>
            <AdventureDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
