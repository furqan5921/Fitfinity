import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import styles from "./goldPlan.module.css";
import data from "./priceData.json";

const ProfPlan = () => {
  const handleOpen = () => {};
  console.log(data.priceData[0].title);

  return (
    <Box className={styles.bgImage}>
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
      >
        <Box>
          <Image src="https://cdn1.cronometer.com/plans/pro-no-icon-logo.svg" />
          <br />
          <Text>
            Our professional version for health coaches and trainers. Monitor
            your clients Cronometer accounts.
          </Text>
          <br />
          <UnorderedList>
            <ListItem>
              Includes 10 client seats -- add more for $2.25 per month
            </ListItem>
            <ListItem>Manage clients’ Cronometer settings and data</ListItem>
            <ListItem>
              View your clients’ diary at any time to monitor compliance
            </ListItem>
            <ListItem>
              Share custom foods and recipes with your clients
            </ListItem>
            <ListItem>
              Chat with clients using secure internal messaging
            </ListItem>
            <ListItem>Export reports to review with your clients</ListItem>
            <ListItem>List your business on our public pro directory</ListItem>
            <ListItem>Cronometer Pro tutorial webinars</ListItem>
          </UnorderedList>

          <Button onClick={() => handleOpen()}>VIEW ALL FEATURES</Button>
        </Box>
        <Box>
          <Text>$29.95</Text>
          <Text>USD per month</Text>
          <Button _hover={"none"} bg="#44d07b" color={"white"}>
            SUBSCRIBE NOW
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfPlan;
