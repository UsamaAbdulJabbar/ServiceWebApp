import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SmButton from "../components/primary/smButton";
import SmInput from "../components/primary/smInput";
import { login } from "../configuration/database/databaseMethod";

function LoginFour() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const LoginUser = () => {
    const obj = {
      email,
      password,
    };

    if (!email) {
      alert("Email Required");
      return;
    }
    if (!password) {
      alert("Password Required");
      return;
    }
    setLoader(true);

    login(obj)
      .then((res) => {
        setLoader(false);
        console.log(res);
        dispatch({
          type: "DATAFROMLOGIN",
          payload: res,
        });
        navigate("/four");
      })
      .catch((err) => {
        alert(err);
        setLoader(false);
      });
  };

  const registrationNav = () => {
    navigate("/registration");
  };
  return (
    <>
      <div class="mt-4 col-md-12 col-sm-12 col-lg-12  d-flex justify-content-center align-items-center">
        <Typography
          variant="h3"
          style={{ fontStyle: "italic", fontWeight: "bold" }}
        >
          {" "}
          Account Login{" "}
        </Typography>
      </div>

      <div
        class="container mt-5 d-flex justify-content-center align-items-center "
        style={{ flexDirection: "column" }}
      >
        <div class="m-2 col-md-12 col-sm-12 col-lg-12  d-flex justify-content-center align-items-center">
          <SmInput
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div class="m-2 col-md-12 col-sm-12 col-lg-12  d-flex justify-content-center align-items-center">
          <SmInput
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
        </div>

        <div class="m-5 col-md-12 col-sm-12 col-lg-12  d-flex justify-content-center align-items-center">
          <SmButton label="Login" variant="contained" onClick={LoginUser} />
        </div>
        <div class=" col-md-12 col-sm-12 col-lg-12  d-flex justify-content-center align-items-center">
          <Typography style={{ color: "grey", fontSize: "1rem" }}>
            {" "}
            Don't have an account ?{" "}
          </Typography>
        </div>

        <div class="mt-3 col-md-12 col-sm-12 col-lg-12  d-flex justify-content-center align-items-center">
          <SmButton label="Register" onClick={registrationNav} />
        </div>
      </div>
    </>
  );
}

export default LoginFour;
