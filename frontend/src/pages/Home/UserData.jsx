import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const UserData = () => {
  return (
    <Box p="4%" bg={"rgb(255,255,255)"}>
      <Box w="90%" m="auto">
        <Box w={["100%", "100%", "60%", "50%"]} m="auto">
          <Heading
            textAlign={"center"}
            size={["lg", "lg", "xl", "xl"]}
            variant={"h1"}
          >
            Discover your nutrition
          </Heading>
          <Text textAlign={"center"} fontSize={["sm", "sm", "xl", "xl"]}>
            Fitfinity encourages you to not just count your calories but to
            focus on your nutrition as a whole.
          </Text>
        </Box>
        <Box>
          <Flex justifyContent={"space-between"} mt="1rem">
            <Box w="48%">
              <Image
                w="100%"
                src="https://cdn1.cronometer.com/webflow/crono-hero-img-22x-1.png"
                border={"1px solid black"}
              />
            </Box>
            <Box w="48%" border={"1px solid black"}>
              <VStack justifyContent={"space-evenly"} gap={10}>
                <HStack justifyContent={"space-between"}  w="100%">
                  <Box w="10%">
                    <Image
                      h={"3rem"}
                      w="100%"
                      src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                    />
                  </Box>
                  <Box w="85%" border={"1px solid red"}>
                    <VStack alignItems={"left"}>
                      <Heading size={["md", "md", "lg", "lg"]} variant={"h1"}>Over 6 million users</Heading>
                      <Text fontSize={["sm", "sm", "lg", "lg"]}>
                        Join the community to get tips and inspiration from
                        other users on our forums and Facebook group.
                      </Text>
                    </VStack>
                  </Box>
                </HStack>
                <HStack></HStack>
                <HStack></HStack>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default UserData;
