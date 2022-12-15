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
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

const ProfPlan = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box className={styles.bgImage}>
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
      >
        <Box>
          <Image
            w={["50%", "40%", "100%"]}
            src="https://cdn1.cronometer.com/plans/pro-no-icon-logo.svg"
          />
          <br />
          <Text fontWeight={"bold"} fontSize={["13px", "15px", "20px"]}>
            Our professional version for health coaches and trainers. Monitor
            your clients Cronometer accounts.
          </Text>
          <br />
          <UnorderedList fontSize={["10px", "13px", "17px"]}>
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
          <br />
          <Button
            variant={"outline"}
            colorScheme="orange"
            fontSize={["10px", "13px", "15px"]}
            onClick={() => handleOpen()}
          >
            VIEW ALL FEATURES
          </Button>
        </Box>
        <Box>
          <Text
            fontSize={["l", "xl", "3xl"]}
            fontWeight={"bold"}
            textAlign={["left", "left", "right"]}
          >
            $29.95
          </Text>
          <Text fontSize={["10px", "13px", "17px"]}>USD per month</Text>
          <br />
          <Button
            _hover={"none"}
            bg="#44d07b"
            color={"white"}
            fontSize={["10px", "13px", "17px"]}
          >
            SUBSCRIBE NOW
          </Button>
        </Box>
      </Flex>
      {open ? (
        <TableContainer>
          <Table variant="striped" colorScheme="#fafbff">
            <Thead>
              <Tr>
                <Th w="70%">
                  <Text>Gold Features</Text>
                  <Text>USD per Year - billed annually</Text>
                </Th>
                <Th w="15%">
                  <Image src="https://cdn1.cronometer.com/plans/basic-logo.svg" />
                  <Text>$0.00</Text>
                </Th>
                <Th w="15%">
                  <Image src="https://cdn1.cronometer.com/plans/gold-logo.svg" />
                  <Text>$49.99</Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.priceData.map((el) => {
                return (
                  <Tr>
                    <Td w="70%">
                      <Text>{el.title}</Text>
                      <Text>{el.details}</Text>
                    </Td>
                    <Td w="15%">
                      {el.basic ? (
                        <CheckIcon color="green" />
                      ) : (
                        <CloseIcon color="red" />
                      )}
                    </Td>
                    <Td w="15%">
                      {el.gold ? (
                        <CheckIcon color="green" />
                      ) : (
                        <CloseIcon color="red" />
                      )}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
};

export default ProfPlan;
