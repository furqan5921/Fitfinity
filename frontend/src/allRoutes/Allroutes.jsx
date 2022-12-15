import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashbaord" element={<Dashboard />} />
    </Routes>
  );
};

export default Allroutes;
