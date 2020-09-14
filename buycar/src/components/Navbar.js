import React from "react";
import "./navbar.css";

//material import
import SearchIcon from '@material-ui/icons/Search';
import Secondside from "./Secondside";
import { ListItemSecondaryAction } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';


function Navbar() {
  return (
    <div className="Navbar_main">
      <div className="LeftList">
        <div className="Logo">CAR HUNT</div>
        <h3>Vehicles</h3>
        <h3>Service</h3>
        <h3>Finance</h3>
      </div>
      <div className="RightIcon">
         <SearchIcon/>
        <h4><PersonIcon style={{paddingRight:"5px"}}/> Sign In</h4>
      </div>
    </div>
  );
}

export default Navbar;
