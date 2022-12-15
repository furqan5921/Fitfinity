import React from "react";
import {
  Box,
  Button,
  Flex,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
const Plans = () => {
  const [changePrice, setChangePrice] = useState(false);

  const handleChangePrice = (state) => {
    setChangePrice(state);
  };

  return (
    <Box w="80%" border={"1px"} float={"right"} bg="rgb(250, 241, 222)">
      <Text>Plans for Individuals</Text>
      <Box w={"95%"} bg="white" border={"1px"} m="auto">
        <Flex
          flexDirection={["column,column,row"]}
          justifyContent={["center", "center", "space-between"]}
        >
          <Box>
            <Text>Cronometer Gold</Text>
            <Text>Reach your goals faster with Gold</Text>
            <UnorderedList>
              <ListItem>No ads!</ListItem>
              <ListItem>Import recipes via URL</ListItem>
              <ListItem>Dairy groups and timestamps</ListItem>
              <ListItem>Target scheduler</ListItem>
              <ListItem>Fasting timer</ListItem>
              <ListItem>Nutrition scores</ListItem>
              <ListItem>Plus all our premium features</ListItem>
            </UnorderedList>
            <Button>VIEW ALL FEATURES</Button>
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
            <Button>SUBSCRIBE NOW</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Plans;
