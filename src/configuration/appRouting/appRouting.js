import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "../../appScreens/dashboard";
import LoginTwo from "../../appScreens/login2";
import LoginFour from "../../appScreens/loginfour";
import LoginScreen from "../../appScreens/loginScreen";
import LoginThree from "../../appScreens/loginThree";
import RegistrationScreen from "../../appScreens/registrationScreen";
import ServiceFour from "../../appScreens/serviceFour";
import ServiceOne from "../../appScreens/serviceOne";
import ServiceThree from "../../appScreens/serviceThree";
import ServiceTwo from "../../appScreens/serviceTwo";

export default function AppRouting() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/one" element={<ServiceOne />} />
        <Route path="/two" element={<ServiceTwo />} />
        <Route path="/three" element={<ServiceThree />} />
        <Route path="/four" element={<ServiceFour />} />
        <Route path="/registration" element={<RegistrationScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="login2" element={<LoginTwo />} />
        <Route path="login3" element={<LoginThree />} />
        <Route path="login4" element={<LoginFour />} />
      </Routes>
    </Router>
  );
}
