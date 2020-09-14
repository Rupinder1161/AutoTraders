import React, { useState } from "react";
import "./firstside.css";

//expansion

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

//import the material icons
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import SettingsIcon from "@material-ui/icons/Settings";
import OpacityIcon from "@material-ui/icons/Opacity";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

//import data
import InternalData from "./InternalData";
import InternalDataModel from "./InternalDataModel";
import BodyStyle from "./BodyStyle";
//hooks

import { useSelector, useDispatch } from "react-redux";
import { intialRequest, changeprice, changemodel, changebody } from "../actions";

//dynmaic functions

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: "$0",
  },
  {
    value: 2000,
    label: "$2000",
  },
  {
    value: 5000,
    label: "$5000",
  },
  {
    value: 10000,
    label: "$10000",
  },
];

const milagemarks = [
  {
    value: 0,
    label: "0KM",
  },
  {
    value: 70000,
    label: "70000 KM",
  },
  {
    value: 200000,
    label: "200000 KM",
  },
];

const enginemarks = [
  {
    value: 0,
    label: "0 CC",
  },
  {
    value: 2000,
    label: "2000 CC",
  },
  {
    value: 4000,
    label: "4000 CC",
  },
];



function PriceBar({ defaultValue, step, marks, max, namel }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [state, setState] = React.useState(
   20
  );

  const valuetext = (value) => {
    setState(value)
    return value;
  }

  const onChange = () =>{
    dispatch(changeprice(state))
  }
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom>
        {namel}
      </Typography>
      <Slider
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={step}
        marks={marks}
        max={max}
        onChange={()=>{onChange()}}
        valueLabelDisplay="on"
      />
    </div>
  );
}

//dynmaic functions

function Option({
  name,
  Icon,
  Internal,
  defaultValue,
  step,
  max,
  marks,
  namel,
}) {
  return (
    <div className="Option">
      <Accordion className="expnadMain">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Icon />
          <Typography>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Internal
            defaultValue={defaultValue}
            step={step}
            max={max}
            marks={marks}
            namel={namel}
            Suzuki={true}
            data={object1}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function FirstSide() {
  const cool = useSelector((state) => state.data);
  const make = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="mainDiv">
      <Option name="Make" Icon={LocalActivityIcon} Internal={InternalData} />
      <Option
        name="Model"
        Icon={DriveEtaIcon}
        changemethod={changemodel}
        Internal={InternalDataModel}
      />
      <Option name="BodyStyle" Icon={HourglassEmptyIcon} Internal={BodyStyle} />
      <Option
        name="Price"
        Icon={AttachMoneyIcon}
        Internal={PriceBar}
        defaultValue={500}
        step={10}
        max={10000}
        marks={marks}
        namel="Price Range"
      />
      <Option
        name="Mileage"
        Icon={LocalGasStationIcon}
        Internal={PriceBar}
        defaultValue={100000}
        step={10}
        max={200000}
        marks={milagemarks}
        namel="KiloMeters"
      />
      <Option
        name="Engine Size"
        Icon={SettingsIcon}
        Internal={PriceBar}
        defaultValue={2000}
        step={100}
        max={4000}
        marks={enginemarks}
        namel="Engine Power in CC"
      />
      <Option name="Fuel Type" Icon={OpacityIcon} Internal={InternalData} />
      <Option
        name="Transmision"
        Icon={AssignmentTurnedInIcon}
        Internal={InternalData}
      />
    </div>
  );
}

export default FirstSide;
