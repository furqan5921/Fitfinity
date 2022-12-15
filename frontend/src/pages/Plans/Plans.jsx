import React from "react";
import { Box, Text } from "@chakra-ui/react";
import GoldPlan from "./GoldPlan";
import GiftSubscription from "./GiftSubscription";

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
      <GiftSubscription />
    </Box>
  );
};

export default Plans;
