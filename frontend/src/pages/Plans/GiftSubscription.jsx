import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import styles from "./goldPlan.module.css";

const GiftSubscription = () => {
  return (
    <Box className={styles.bgImage}>
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
      >
        <Box>
          <Image
            w={["50%", "40%", "100%"]}
            src="https://cdn1.cronometer.com/plans/gold-no-icon-logo.svg"
          />
          <br />
          <Text fontWeight={"bold"} fontSize={["13px", "15px", "20px"]}>
            Give the gift of Gold and purchase a one-year subscription for a
            friend or family member.
          </Text>
          <br />
        </Box>
        <Box>
          <Text
            fontSize={["l", "xl", "3xl"]}
            fontWeight={"bold"}
            textAlign={["left", "left", "right"]}
          >
            $49.99
          </Text>
          <Text
            textAlign={["left", "left", "right"]}
            fontSize={["10px", "13px", "17px"]}
          >
            USD per Year (non-renewing)
          </Text>
          <br />
          <Button
            fontSize={["10px", "13px", "17px"]}
            _hover={"none"}
            bg="#ff6733"
            color={"white"}
          >
            SUBSCRIBE NOW
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default GiftSubscription;
