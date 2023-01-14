import React from "react";
import TextField from "@mui/material/TextField";

function SmInput(props) {
  const { label, placeholder, onChange,type } = props;
  return (
    <>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        autoComplete="none"
        onChange={onChange}
        sx={{ width: "400px" }}
              placeholder={placeholder}
              type = {type}
      />
    </>
  );
}

export default SmInput;
