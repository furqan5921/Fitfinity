import React from "react";
import { Route, Routes } from "react-router-dom";
import Dairy from "../pages/Dairy/Dairy";

import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashbaord" element={<Dashboard />} />
      <Route path="/dairy" element={<Dairy/>}/>
    </Routes>
  );
};

export default Allroutes;
