import React,{useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
//import all the componets
import Navbar from "./components/Navbar";
import FirstSide from "./components/FirstSide";
import Secondside from "./components/Secondside";
import Product from "./components/Product"


//
import { useSelector, useDispatch } from "react-redux";
import { intialRequest } from "./actions";

function App(props) {

  const dispatch = useDispatch();
  const cool = useSelector((state) => state.data);

  useEffect(() => {
    axios
      .get("http://localhost:8000/data/")
      .then((response) => dispatch(intialRequest(response.data)))
      .catch((error) => {
        return console.log(error);
      });
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <div className="middleSection">
              <FirstSide />
              <Secondside />
            </div>
          </Route>
          <Route path="/product/:id" component={Product} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
