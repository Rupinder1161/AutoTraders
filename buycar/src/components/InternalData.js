import React from 'react'

//import data
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";


function InternalData() {
    return (
        <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={false}
                // onChange={handleChange}
                name="gilad"
              />
            }
            label="Suzuki"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked="hello"
                // onChange={handleChange}
                name="jason"
              />
            }
            label="Kia"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked="jagroop"
                // onChange={handleChange}
                name="antoine"
              />
            }
            label="Honda"
          />
        </FormGroup>
      </FormControl>
    )
}

export default InternalData
