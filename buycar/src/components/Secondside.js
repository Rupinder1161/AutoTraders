import React, { useEffect } from "react";

import "./secondside.css";
import { Button } from "@material-ui/core";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//material ui
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

//import redux tools
import { useSelector, useDispatch } from "react-redux";
import { intialRequest, changemake, changemodel } from "../actions";

function Card({
  id,
  pic,
  name,
  Mileage,
  Enginesize,
  Transmision,
  FuelType,
  Price,
}) {
  return (
    <div className="Card" key={id}>
      <Link to={"/product/" + id}>
        <img
          src={pic}
          alt="Image is not availble"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "gray",
          }}
          width="300px"
          height="300px"
        ></img>
      </Link>
      <div className="namsection">
        <h3>{name}</h3>
      </div>
      <div className="Info">
        <h4>{Mileage}km</h4>
        <h4>{Enginesize}cc</h4>
        <h4>{Transmision}</h4>
        <h4>{FuelType}</h4>
      </div>
      <div className="Price">
        <h3>${Price}</h3>
      </div>
      <div className="viewSection">
        <Link to="/product">
          <VisibilityIcon />
        </Link>
        <FavoriteBorderIcon />
      </div>
    </div>
  );
}

function Secondside(props) {
  const cool = useSelector((state) => state.data);
  const make = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  // console.log(make);
  return (
    <div className="second">
      <div className="inputDiv">
        <input type="text" className="Inputtag" />
        <Button
          className="InputButton"
          onClick={() => {
            dispatch(changemodel("Love you"));
          }}
        >
          search
        </Button>
      </div>
      <div className="Cards" >
        {cool.map((e) => (
          <Card
            id={e._id}
            pic={e.Pic}
            name={e.name}
            Mileage={e.Mileage}
            Enginesize={e.EngineSize}
            FuelType={e.FuelType}
            Transmision={e.Transmision}
            Price={e.Price}
          />
        ))}
      </div>
    </div>
  );
}

export default Secondside;
