import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SmButton from "../components/primary/smButton";
import SmInput from "../components/primary/smInput";
import { signUp } from "../configuration/database/databaseMethod";

function RegistrationScreen() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const signUpUser = () => {
    const obj = {
      userName,
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

    //User Create Authentication
    signUp(obj)
      .then((res) => {
        setLoader(false);
        alert(res);
      })
      .catch((err) => {
        setLoader(false);
        alert(err);
      });
    console.log(obj);
  };

  const loginNav = () => {
    navigate("/login");
  };

  return (
    <>
      <div class="mt-4 col-md-12 col-sm-12 col-lg-12  d-flex justify-content-center align-items-center">
        <Typography
          variant="h3"
          style={{ fontStyle: "italic", fontWeight: "bold" }}
        >
          {" "}
          Create Your Account{" "}
        </Typography>
      </div>

      <div
        class="container mt-5 d-flex justify-content-center align-items-center "
        style={{ flexDirection: "column" }}
      >
        <div class="m-2 col-md-12 col-sm-12 col-lg-12  d-flex justify-content-center align-items-center">
          <SmInput
            placeholder="Name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div class="m-2 col-md-12 col-sm-12 col-lg-12  d-flex justify-content-center align-items-center">
          <SmInput
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div class="m-2 col-md-12 col-sm-12 col-lg-12  d-flex justify-content-center align-items-center">
          <SmInput
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>

        <div class="m-5 col-md-12 col-sm-12 col-lg-12  d-flex justify-content-center align-items-center">
          <SmButton
            loading={loader}
            label="Register"
            variant="contained"
            onClick={signUpUser}
          />
        </div>
        <div class=" col-md-12 col-sm-12 col-lg-12  d-flex justify-content-center align-items-center">
          <Typography style={{ color: "grey", fontSize: "1rem" }}>
            {" "}
            Already have an account ?{" "}
          </Typography>
        </div>

        <div class="mt-3 col-md-12 col-sm-12 col-lg-12  d-flex justify-content-center align-items-center">
          <SmButton label="Login" onClick={loginNav} />
        </div>
      </div>
    </>
  );
}

export default RegistrationScreen;
