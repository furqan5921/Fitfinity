import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HomeReview from "./HomeReview";
import NutritionPage from "./NutritionPage";
import SignPage from "./SignPage";
import Social from "./Social";
import Sych from "./Sych";
import UserData from "./UserData";
import VideoPart from "./VideoPart";

const Home = () => {
  return (
    <Box>
      <VideoPart />
      <Social />
      <NutritionPage />
      <UserData />
      <SignPage />
      <Sych />
      <HomeReview />
    </Box>
  );
};

export default Home;
