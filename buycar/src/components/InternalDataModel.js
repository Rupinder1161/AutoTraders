import React, { useState } from "react";

//import data
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

//import redux tools
import { useSelector, useDispatch } from "react-redux";
import { intialRequest, changemake, changemodel } from "../actions";

function InternalDataModel(props) {
  const cool = useSelector((state) => state.data);
  const make = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    Suzuki: true,
    kia: true,
    Honda: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    dispatch(
      changemodel({ ...state, [event.target.name]: event.target.checked })
    );
  };

  const { Suzuki, kia, Honda } = state;
  const error = [Suzuki, kia, Honda].filter((v) => v).length >= 2;
  // console.log([Suzuki,kia,Honda])
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

export default InternalDataModel;
