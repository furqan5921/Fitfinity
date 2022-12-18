import { Box } from "@chakra-ui/react";
import React from "react";

import Footer from "./Footer";
import HomeReview from "./HomeReview";
import NutritionPage from "./NutritionPage";
import SignPage from "./SignPage";
import Social from "./Social";
import Sych from "./Sych";
import UserData from "./UserData";
import VideoPart from "./VideoPart";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";
const Home = () => {
  return (
    <Box>
      {/* <Sidebar/> */}
      <Navbar/>
      <VideoPart />
      <Social />
      <NutritionPage />
      <UserData />
      <SignPage />
      <Sych />
      <HomeReview />
      <Footer />
    </Box>
  );
};

export default Home;
