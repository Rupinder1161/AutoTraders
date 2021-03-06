import React, { useState } from "react";

//import data
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

//hooks
import { useSelector, useDispatch } from "react-redux";
import { intialRequest, changemake, changemodel } from "../actions";

function InternalData(props) {
  const cool = useSelector((state) => state.data);
  const make = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  // console.log(make)

  const [state, setState] = React.useState(make);
  const { Suzuki, kia, Honda } = state;
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // dispatch(changemodel([Suzuki,kia,Honda]))
  const error = [Suzuki, kia, Honda].filter((v) => v).length >= 2;
  return (
    <FormControl component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={Suzuki} onChange={handleChange} name="Suzuki" />
          }
          label="Suzuki"
        />
        <FormControlLabel
          control={
            <Checkbox checked={kia} onChange={handleChange} name="kia" />
          }
          label="Kia"
        />
        <FormControlLabel
          control={
            <Checkbox checked={Honda} onChange={handleChange} name="Honda" />
          }
          label="Honda"
        />
      </FormGroup>
    </FormControl>
  );
}

export default InternalData;
