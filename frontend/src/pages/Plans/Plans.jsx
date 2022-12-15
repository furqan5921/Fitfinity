import React from "react";
import { Box, Text } from "@chakra-ui/react";
import GoldPlan from "./GoldPlan";
import GiftSubscription from "./GiftSubscription";
import ProfPlan from "./ProfPlan";
import Enterprise from "./Enterprise";
import FAQ from "./FAQ";

const Plans = () => {
  return (
    <Box w="80%" float={"right"} bg="rgb(250, 241, 222)">
      <Text fontSize={["l", "xl", "2xl"]} fontWeight="bold" w="95%" m="auto">
        Plans for Individuals
      </Text>
      <br />
      <GoldPlan />
      <br />
      <Text fontSize={["l", "xl", "2xl"]} fontWeight="bold" w="95%" m="auto">
        Gift Subscriptions
      </Text>
      <br />
      <GiftSubscription />
      <br />
      <Text fontSize={["l", "xl", "2xl"]} fontWeight="bold" w="95%" m="auto">
        Plans for Professionals
      </Text>
      <br />
      <ProfPlan />
      <br />
      <Enterprise />
      <br />
      <FAQ />
      <br />
    </Box>
  );
};

export default Plans;
