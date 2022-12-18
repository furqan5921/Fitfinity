import React from "react";
import { Route, Routes } from "react-router-dom";

import Dairy from "../pages/Dairy/Dairy";

import Login from "../pages/Auth/Login/Login";
import Otp from "../pages/Auth/OtpVerification/Otp";
import Signup from "../pages/Auth/Signup/Signup";

import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Plans from "../pages/Plans/Plans";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Support from "../pages/Support/Support";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/dairy" element={<Dairy />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/support" element={<Support />}></Route>
    </Routes>
  );
};

export default Allroutes;
