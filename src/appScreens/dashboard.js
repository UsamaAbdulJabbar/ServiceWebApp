import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppCards from "../components/secondary/appCards";
import Appnavbar from "../components/secondary/navbar";

function Dashboard() {
  const navigate = useNavigate();

  function scrOne() {
    navigate("/login");
  }
  function scrTwo() {
    navigate("/login2");
  }
  function scrThree() {
    navigate("/login3");
  }

  function scrFour() {
    navigate("/login4");
  }
  return (
    <>
      <div>
        <Appnavbar />
      </div>

      <div class="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center align-items-center mt-5 ">
        <Typography
          variant="h2"
          sx={{ fontStyle: "italic", textAlign: "center" }}
        >
          Service Management System
        </Typography>
      </div>

      <div class="container mt-5  ">
        <div class="row">
          <div class="col-sm-12 col-md-5 col-lg-5 m-1 ">
            <AppCards label="Service One" onClick={scrOne} />
          </div>
          <div class="col-sm-12 col-md-5 col-lg-5 m-1">
            <AppCards label="Service Two" onClick={scrTwo} />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-sm-12 col-md-5 col-lg-5 m-1">
            <AppCards label="Service Three" onClick={scrThree} />
          </div>
          <div class="col-sm-12 col-md-5 col-lg-5 m-1">
            <AppCards label="Service Four" onClick={scrFour} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
