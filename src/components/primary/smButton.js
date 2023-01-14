import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
function SmButton(props) {
  const { label, onClick, variant, loading, disabled } = props;
  return (
    <>
      <Button
        disabled={loading || disabled}
        variant={variant}
        onClick={onClick}
        sx={{ width: "400px" }}
      >
        {loading ? <CircularProgress /> : label}
      </Button>
    </>
  );
}

export default SmButton;
