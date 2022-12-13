import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import NutritionPage from "./NutritionPage";
import Social from "./Social";
import UserData from "./UserData";

const Home = () => {
  return (
    <Box>
      <Box border={"1px solid red"} w="100%" bg="rgb(255,195,177)">
        <Flex
          gap={10}
          p="4%"
          alignItems={["center", "center", "flex-start", "flex-start"]}
          direction={["column", "column", "row", "row"]}
        >
          <Box w="48%">
            <Box>
              <VStack alignItems={"flex-start"} mt="10%">
                <Box>
                  <Heading
                    as={"h1"}
                    fontWeight={"bold"}
                    size={["lg", "lg", "2xl", "2xl"]}
                  >
                    Eat smarter.
                  </Heading>
                  <Heading
                    as={"h1"}
                    fontWeight={"bold"}
                    size={["lg", "lg", "2xl", "2xl"]}
                  >
                    Live better.
                  </Heading>
                  <Text fontSize={["lg", "lg", "2xl", "2xl"]}>
                    Track your diet, exercise, and health data.
                  </Text>
                </Box>
                <Box mt={"10%"}>
                  <Button
                    size={["md", "md", "lg", "lg"]}
                    bg={"rgb(67,208,123)"}
                  >
                    <Link to={"/signup"}>Sign Up - It's Free!</Link>
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Box>
          <Box w="48%" ml={"2%"} border={"1px solid red"}>
            <AspectRatio maxW="100%" ratio={7 / 5}>
              <iframe
                width="100%"
                height="800"
                src="https://www.youtube.com/embed/R49fLnhMhIE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </AspectRatio>
          </Box>
        </Flex>
      </Box>
      <Social />
      <NutritionPage />
      <UserData />
    </Box>
  );
};

export default Home;
