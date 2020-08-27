import React from "react";

import "./secondside.css";
import { Button } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//material ui
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Card({
  pic,
  name,
  Mileage,
  Enginesize,
  Transmision,
  FuelType,
  Price,
}) {
  return (
    <div class="Card">
      <img src={pic} width="300px" height="300px"></img>
      <div class="namsection">
        <h3>{name}</h3>
      </div>
      <div class="Info">
        <h4>{Mileage}</h4>
        <h4>{Enginesize}</h4>
        <h4>{Transmision}</h4>
        <h4>{FuelType}</h4>
      </div>
      <div class="Price">
        <h3>${Price}</h3>
      </div>
      <div class="viewSection">
        <Link to="/product">
          <VisibilityIcon />
        </Link>
        <FavoriteBorderIcon />
      </div>
    </div>
  );
}

function Secondside() {
  return (
    <div className="second">
      <div className="inputDiv">
        <input type="text" className="Inputtag" />
        <Button className="InputButton">search</Button>
      </div>
      <div className="Cards">
        <Card
          pic="https://findependencehub.com/wp-content/uploads/2019/11/carpic.png"
          name="Maruti Suzuki Swift 2007"
          Mileage="11,1500km"
          Enginesize="1500cc"
          FuelType="Petrol"
          Transmision="Automatic"
          Price={10000}
        />
        <Card
          pic="https://findependencehub.com/wp-content/uploads/2019/11/carpic.png"
          name="Maruti Suzuki Swift 2007"
          Mileage="11,1500km"
          Enginesize="1500cc"
          FuelType="Petrol"
          Transmision="Automatic"
          Price={10000}
        />
        <Card
          pic="https://findependencehub.com/wp-content/uploads/2019/11/carpic.png"
          name="Maruti Suzuki Swift 2007"
          Mileage="11,1500km"
          Enginesize="1500cc"
          FuelType="Petrol"
          Transmision="Automatic"
          Price={20000}
        />
        <Card
          pic="https://cdn.wallpapersafari.com/83/1/NDsczG.jpg"
          name="Maruti Suzuki Swift 2007"
          Mileage="11,1500km"
          Enginesize="1500cc"
          FuelType="Petrol"
          Transmision="Automatic"
          Price={15000}
        />
        <Card
          pic="https://findependencehub.com/wp-content/uploads/2019/11/carpic.png"
          name="Maruti Suzuki Swift 2007"
          Mileage="11,1500km"
          Enginesize="1500cc"
          FuelType="Petrol"
          Transmision="Automatic"
          Price={10000}
        />
        <Card
          pic="https://findependencehub.com/wp-content/uploads/2019/11/carpic.png"
          name="Maruti Suzuki Swift 2007"
          Mileage="11,1500km"
          Enginesize="1500cc"
          FuelType="Petrol"
          Transmision="Automatic"
          Price={10000}
        />
      </div>
    </div>
  );
}

export default Secondside;
