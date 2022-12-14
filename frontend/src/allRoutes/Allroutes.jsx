import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
import Otp from "../pages/Auth/OtpVerification/Otp";
import Signup from "../pages/Auth/Signup/Signup";

import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashbaord" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
  );
};

export default Allroutes;
