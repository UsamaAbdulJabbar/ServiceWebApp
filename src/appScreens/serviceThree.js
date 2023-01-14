import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SpecialNavBar from "../components/secondary/specialNavbar";

function ServiceThree() {
  const userFromRedux = useSelector((a) => a.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (userFromRedux) {
    } else {
      navigate("/login3");
    }
  }, []);

  return (
    <>
      <SpecialNavBar />

      <div class="container mt-5 d-flex justify-content-center align-items-center">
        <Typography variant="h2" style={{ fontStyle: "italic" }}>
          Service Screen Three
        </Typography>
      </div>
    </>
  );
}

export default ServiceThree;
