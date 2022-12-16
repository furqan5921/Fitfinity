import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../Assets/logo.jpeg";
const Footer = () => {
  return (
    <Box bgColor={"rgb(38,42,59)"}>
      <Stack
        flexDirection={"column"}
        divider={<StackDivider p={"1rem"} borderColor="rgb(255,255,255)" />}
        p={"4%"}
      >
        <Box>
          <Flex
            w="100%"
            m={"auto"}
            gap={10}
            flexDirection={["column", "row", "row", "row"]}
          >
            <Box
              w={["90%", "22%", "22%", "22%"]}
              display="flex"
              gap={5}
              flexDirection={"column"}
              alignItems="flex-start"
            >
              <Box w={"50%"}>
                <Image src={logo} />
              </Box>
            </Box>
            <Box
              w={["90%", "22%", "22%", "22%"]}
              display="flex"
              gap={5}
              flexDirection={"column"}
              alignItems="flex-start"
              color={"rgb(255,255,255)"}
            >
              <Heading
                as={"h1"}
                size={["md", "md", "md", "md"]}
                textAlign="left"
              >
                The Company
              </Heading>
              <Text size={["md", "md", "md", "md"]} textAlign="left">
                About Us
              </Text>
              <Text size={["md", "md", "md", "md"]} textAlign="left">
                Crono Blog
              </Text>
              <Text>Privacy</Text>
              <Text size={["md", "md", "md", "md"]} textAlign="left">
                Crono Forums
              </Text>
              <Text size={["md", "md", "md", "md"]} textAlign="left">
                Jobs
              </Text>
              <Text size={["md", "md", "md", "md"]} textAlign="left">
                Support
              </Text>
            </Box>
            <Box
              color={"rgb(255,255,255)"}
              w={["90%", "22%", "22%", "22%"]}
              display="flex"
              gap={5}
              flexDirection={"column"}
            >
              <Heading
                as={"h1"}
                size={["md", "md", "md", "md"]}
                textAlign="left"
              >
                The Product
              </Heading>
              <Text size={["md", "md", "md", "md"]} textAlign="left">
                For Individuals
              </Text>
              <Text size={["md", "md", "md", "md"]} textAlign="left">
                For Professionals
              </Text>
              <Text>Privacy</Text>
              <Text size={["md", "md", "md", "md"]} textAlign="left">
                Terms
              </Text>
            </Box>
            <Box
              w={["90%", "22%", "22%", "22%"]}
              display="flex"
              gap={5}
              flexDirection={"column"}
              color={"rgb(255,255,255)"}
            >
              <Heading
                as={"h1"}
                size={["md", "md", "md", "md"]}
                textAlign="left"
              >
                Partners & Affiliates
              </Heading>
              <Text size={["md", "md", "md", "md"]}>Affiliate Program</Text>
              <Text size={["md", "md", "md", "md"]}>Media Kit</Text>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex
            flexDirection={["column", "column", "row", "row"]}
            justifyContent={"space-between"}
          >
            <Box w={["50%", "50%", "25%", "25%"]} p={"1rem"}>
              <Flex gap={4}>
                <Image
                  w={["40%", "20%", "10", "10%"]}
                  src="https://cdn1.cronometer.com/webflow/instragm-icon-snow-white.svg"
                />
                <Image
                  w={["40%", "20%", "10", "10%"]}
                  src="https://cdn1.cronometer.com/webflow/facebook-icon-snow-white.svg"
                />
                <Image
                  w={["40%", "20%", "10", "10%"]}
                  src="https://cdn1.cronometer.com/webflow/twitter-icon-snow-white.svg"
                />
                <Image
                  w={["40%", "20%", "10", "10%"]}
                  src="https://cdn1.cronometer.com/webflow/youtube-icon-snow-white.svg"
                />
              </Flex>
              <Text
                mt={"1rem"}
                color={"rgb(255,255,255)"}
                textDecoration={"underline"}
              >
                support@cronometer.com
              </Text>
              <Box mt={"2rem"} color={"rgb(255,255,255)"}>
                <Text>Copyright © 2011-2022</Text>
                <Text>All rights reserved</Text>
              </Box>
            </Box>
            <Box
              w={["100%", "10%", "25%", "25%"]}
              display={"flex"}
              justifyContent={"space-between"}
              gap={3}
            >
              <Image
                w={["40%","40%","50%","40%"]}
                src="https://cdn1.cronometer.com/webflow/ios-icon.svg"
              />
              <Image
                w={["40%","40%","50%","40%"]}
                src="https://cdn1.cronometer.com/webflow/android-icon.svg"
              />
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
