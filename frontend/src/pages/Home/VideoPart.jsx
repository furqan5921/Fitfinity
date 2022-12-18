import React, { useEffect } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoPart = () => {
  const { isAuth } = useSelector((s) => s.auth);
  const navigate = useNavigate();
  
  useEffect(()=>{
    if (isAuth) {
      navigate("/dashboard");
    }
  },[])

  return (
    <Box
      w="100%"
      bgImage={"https://cdn1.cronometer.com/webflow/dot-pattern.svg"}
    >
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
                  fontWeight={"extrabold"}
                  size={["lg", "lg", "2xl", "2xl"]}
                >
                  Eat smarter.
                </Heading>
                <Heading
                  as={"h1"}
                  fontWeight={"extrabold"}
                  size={["lg", "lg", "2xl", "2xl"]}
                >
                  Live better.
                </Heading>
                <Text fontSize={["lg", "lg", "2xl", "2xl"]}>
                  Track your diet, exercise, and health data.
                </Text>
              </Box>
              <Box mt={"10%"}>
                <Button size={["md", "md", "lg", "lg"]} bg={"rgb(67,208,123)"}>
                  <Link to={"/signup"}>Sign Up - It's Free!</Link>
                </Button>
              </Box>
            </VStack>
          </Box>
        </Box>
        <Box w="48%" ml={"2%"}>
          <AspectRatio maxW="100%" ratio={[10 / 10, 10 / 10, 7 / 5, 7 / 5]}>
            <iframe
              width="100%"
              height="800"
              src="https://www.youtube.com/embed/R49fLnhMhIE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;full-screen"
            ></iframe>
          </AspectRatio>
        </Box>
      </Flex>
    </Box>
  );
};

export default VideoPart;
