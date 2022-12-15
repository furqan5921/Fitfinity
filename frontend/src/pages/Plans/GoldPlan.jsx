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

const GoldPlan = () => {
  const [changePrice, setChangePrice] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChangePrice = (state) => {
    setChangePrice(state);
  };

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
          <br />
          <Button
            variant={"outline"}
            colorScheme="orange"
            onClick={() => handleOpen()}
          >
            VIEW ALL FEATURES
          </Button>
        </Box>
        <Box mt={["20px", "20px", "0px"]}>
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

export default GoldPlan;
