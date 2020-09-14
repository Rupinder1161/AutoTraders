import React, { useState } from "react";

//import data
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";


//import redux tools
import { useSelector, useDispatch } from "react-redux";
import { changebody } from "../actions";

function BodyStyle(props) {
  const cool = useSelector((state) => state.data);
  const make = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    Convertible : true,
    Coupe: false,
    Hatchback: false,
    Sedan:false,
    Station_Wagon:true,
    SUV:true,
    Ute:true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    dispatch(
      changebody({ ...state, [event.target.name]: event.target.checked })
    );
  };

  const { Convertible, Hatchback,Coupe,Sedan ,Station_Wagon,SUV,Ute} = state;
  // const error = [Convertible, kia, Honda].filter((v) => v).length >= 2;
  // console.log([Suzuki,kia,Honda])
  return (
    <FormControl component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={Convertible}
              onChange={handleChange}
              name="Convertible"
            />
          }
          label="Convertible"
        />
        <FormControlLabel
          control={
            <Checkbox checked={Coupe} onChange={handleChange} name="Coupe" />
          }
          label="Coupe"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Hatchback}
              onChange={handleChange}
              name="Hatchback"
            />
          }
          label="Hatchback"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Sedan}
              onChange={handleChange}
              name="Sedan"
            />
          }
          label="Sedan"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Station_Wagon}
              onChange={handleChange}
              name="Station_Wagon"
            />
          }
          label="Station Wagon"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={SUV}
              onChange={handleChange}
              name="SUV"
            />
          }
          label="SUV"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Ute}
              onChange={handleChange}
              name="Ute"
            />
          }
          label="Ute"
        />
      </FormGroup>
    </FormControl>
  );
}

export default BodyStyle;
