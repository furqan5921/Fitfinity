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
  TableCaption,
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

const Plans = () => {
  const [changePrice, setChangePrice] = useState(false);

  const handleChangePrice = (state) => {
    setChangePrice(state);
  };
  const handleOpen = () => {};
  console.log(data.priceData[0].title);

  return (
    <Box w="80%" float={"right"} bg="rgb(250, 241, 222)">
      <Text fontSize={["l", "xl", "2xl"]} fontWeight="bold" w="95%" m="auto">
        Plans for Individuals
      </Text>
      <br />
      <Box className={styles.bgImage}>
        <Flex
          flexDirection={["column,column,row"]}
          justifyContent={["center", "center", "space-between"]}
        >
          <Box>
            {/* <Text>Cronometer Gold</Text> */}
            <Image src="https://cdn1.cronometer.com/plans/gold-no-icon-logo.svg" />
            <br />
            <Text>Reach your goals faster with Gold</Text>
            <br />
            <UnorderedList>
              <ListItem>No ads!</ListItem>
              <ListItem>Import recipes via URL</ListItem>
              <ListItem>Dairy groups and timestamps</ListItem>
              <ListItem>Target scheduler</ListItem>
              <ListItem>Fasting timer</ListItem>
              <ListItem>Nutrition scores</ListItem>
              <ListItem>Plus all our premium features</ListItem>
            </UnorderedList>
            <Button onClick={() => handleOpen()}>VIEW ALL FEATURES</Button>
          </Box>
          <Box>
            {changePrice ? (
              <>
                <Text>$8.99</Text> <Text>USD per month-billed monthly</Text>
              </>
            ) : (
              <>
                <Text>$4.99</Text> <Text>USD per year-billed yearly</Text>
              </>
            )}
            <RadioGroup defaultValue="1">
              <Stack spacing={5} direction="row">
                <Radio
                  onClick={() => handleChangePrice(false)}
                  colorScheme="orange"
                  value="1"
                  size="lg"
                >
                  Yearly
                </Radio>
                <Radio
                  onClick={() => handleChangePrice(true)}
                  colorScheme="orange"
                  value="2"
                  size="lg"
                >
                  Monthly
                </Radio>
              </Stack>
            </RadioGroup>
            <Button _hover={"none"} bg="#ff6733" color={"white"}>
              SUBSCRIBE NOW
            </Button>
          </Box>
        </Flex>
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
                <Tr>
                  <Td w="70%">
                    <Text>{el.title}</Text>
                    <Text>{el.details}</Text>
                  </Td>
                  <Td w="15%">{el.basic ? "Okay" : "Not Okay"}</Td>
                  <Td w="15%">{el.gold ? "Okay" : "Not Okay"}</Td>
                </Tr>;
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Plans;
