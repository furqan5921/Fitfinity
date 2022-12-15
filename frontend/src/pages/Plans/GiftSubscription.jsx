import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import styles from "./goldPlan.module.css";

const GiftSubscription = () => {
  return (
    <Box className={styles.bgImage}>
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
      >
        <Box>
          <Text>Give Cronometer Gold</Text>
          <br />
          <Text>
            Give the gift of Gold and purchase a one-year subscription for a
            friend or family member.
          </Text>
          <br />
        </Box>
        <Box>
          <Text>$49.99</Text>
          <Text>USD per Year (non-renewing)</Text>
          <Button _hover={"none"} bg="#ff6733" color={"white"}>
            SUBSCRIBE NOW
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default GiftSubscription;
