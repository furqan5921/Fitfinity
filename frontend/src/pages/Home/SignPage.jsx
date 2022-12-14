import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SignPage = () => {
  return (
    <Box bgColor="rgb(38,42,59)">
      <Box p={"1rem%"}>
        <Box
          w={["95%", "95%", "40%", "40%"]}
          m="auto"
          pt="70px"
          mb={["30px", "40px", "60px", "70px"]}
        >
          <Text
            fontSize={["md", "md", "xl", "xl"]}
            textAlign="center"
            fontWeight="500"
            color={"rgb(255,255,255)"}
          >
            Find out if you're getting the vitamins and minerals you need with
            our food diary app.
          </Text>
          <Box
            w="50%"
            m="auto"
            mt={["30px", "40px", "50px"]}
            pb={["10px", "30px", "50px"]}
          >
            <Button
              fontSize={["md", "lg", "md", "2xl"]}
              colorScheme="rgb(38,42,59)"
              bgColor="rgb(67,208,123)"
              w="100%"
              color={"rgb(38,42,59)"}
              _hover={{
                border: "1px solid rgb(255,255,255)",
              }}
            >
              <Link to="/sign">Sign Up - It's Free!</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignPage;
