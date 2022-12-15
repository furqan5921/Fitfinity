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
    <Box bg={"rgb(255,255,255)"}>
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
          <Flex
            justifyContent={"space-between"}
            mt="1rem"
            alignItems={["center", "center", "flex-start", "flex-start"]}
            direction={["column", "column", "row", "row"]}
          >
            <Box w="48%">
              <Image
                w="100%"
                src="https://cdn1.cronometer.com/webflow/crono-hero-img-22x-1.png"
              />
            </Box>
            <Box w="48%">
              <VStack alignItems={"space-evenly"} mt={"1rem"} gap={10}>
                <HStack justifyContent={"space-between"} h="30%">
                  <Box w="10%">
                    <Image
                      h={"3rem"}
                      w="100%"
                      src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                    />
                  </Box>
                  <Box w="85%">
                    <VStack alignItems={"left"}>
                      <Heading size={["sm", "sm", "md", "md"]} variant={"h1"}>
                        Over 6 million users
                      </Heading>
                      <Text fontSize={["sm", "sm", "md", "md"]}>
                        Join the community to get tips and inspiration from
                        other users on our forums and Facebook group.
                      </Text>
                    </VStack>
                  </Box>
                </HStack>
                <HStack justifyContent={"space-between"} h="30%">
                  <Box w="10%">
                    <Image
                      h={"3rem"}
                      w="100%"
                      src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                    />
                  </Box>
                  <Box w="85%">
                    <VStack alignItems={"left"}>
                      <Heading size={["sm", "sm", "md", "md"]} variant={"h1"}>
                        Accurate nutrition data
                      </Heading>
                      <Text fontSize={["sm", "sm", "md", "md"]}>
                        Be confident that the food you log has the correct
                        nutrition data. We verify every food submission for
                        accuracy.
                      </Text>
                    </VStack>
                  </Box>
                </HStack>
                <HStack justifyContent={"space-between"} h="30%">
                  <Box w="10%">
                    <Image
                      h={"3rem"}
                      w="100%"
                      src="https://cdn1.cronometer.com/webflow/checkmark.svg"
                    />
                  </Box>
                  <Box w="85%">
                    <VStack alignItems={"left"}>
                      <Heading size={["sm", "sm", "md", "md"]} variant={"h1"}>
                        Data privacy & security
                      </Heading>
                      <Text fontSize={["sm", "sm", "md", "md"]}>
                        We don't sell your account data to third parties and
                        take the security of our users' accounts seriously.
                      </Text>
                    </VStack>
                  </Box>
                </HStack>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default UserData;
