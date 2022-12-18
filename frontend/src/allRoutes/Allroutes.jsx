import React from "react";
import { Route, Routes } from "react-router-dom";

import Dairy from "../pages/Dairy/Dairy";

import Login from "../pages/Auth/Login/Login";
import Otp from "../pages/Auth/OtpVerification/Otp";
import Signup from "../pages/Auth/Signup/Signup";


import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Plans from "../pages/Plans/Plans";
import PrivateRoutes from "../hoc/PrivateRoutes";
import Blog from "../pages/Blog/Blog";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      

      <Route path="/dashboard" element={<PrivateRoutes> <Dashboard /> </PrivateRoutes>} />
      <Route path="/dairy" element={<PrivateRoutes><Dairy /></PrivateRoutes>} />
      <Route path='/plans' element={<PrivateRoutes><Plans /></PrivateRoutes>} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/blog" element={<Blog />} />

    </Routes>
  );
};

export default Allroutes;
