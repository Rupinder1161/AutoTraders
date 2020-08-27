import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import all the componets
import Navbar from "./components/Navbar";
import FirstSide from "./components/FirstSide";
import Secondside from "./components/Secondside";
import Product from "./components/Product"
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <div class="middleSection">
              <FirstSide />
              <Secondside />
            </div>
          </Route>
          <Route path="/product" exact>
             <Product/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
