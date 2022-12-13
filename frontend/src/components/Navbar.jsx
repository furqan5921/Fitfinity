import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.jpeg";

const Navbar = () => {
  const [arrow, setArrow] = useState(false);

  const handleArrow = () => {
    let status = !arrow;
    setArrow(status);
  };
  return (
    <Box
      mx="50%"
      w="90%"
      display={["none", "none", "none", "block"]}
      m="auto"
      p="0.5%"
      size={["xs", "sm", "md", "lg"]}
      bg="rgb(255,255,255)"
      zIndex={999}
      mt="0px"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box w={["70%", "70%", "40%"]}>
          <Box w={["90%", "90%", "20%"]} textAlign="center">
            <Link to={"/"}>
              <Image src={logo} alt="logo" w="100%" />
            </Link>
          </Box>
        </Box>
        <Flex w="60%" justifyContent="space-between">
          <HStack justifyContent="space-evenly" w="100%">
            <Popover>
              <PopoverTrigger>
                <Button
                  fontSize="xl"
                  fontWeight="450"
                  onClick={handleArrow}
                  variant="ghost"
                  _hover={{ color: "#FF763F" }}
                >
                  Products {arrow ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                  <Flex _>
                    <Box w="15%" mr="20px">
                      <Image src={logo} w="100%" h={"100%"} />
                    </Box>
                    <Box textAlign="left">
                      <Heading
                        _hover={{ color: "#FF763F", cursor: "pointer" }}
                        size="sm"
                      >
                        Coronometer
                      </Heading>
                      <Text>For Individuals</Text>
                    </Box>
                  </Flex>
                  <Flex mt="20px">
                    <Box w="15%" mr="20px">
                      <Image src={logo} w="100%" h={"100%"} />
                    </Box>
                    <Box textAlign="left">
                      <Heading
                        _hover={{ color: "#FF763F", cursor: "pointer" }}
                        size="sm"
                      >
                        Coronometer Pro
                      </Heading>
                      <Text>For Healthcare Professionals</Text>
                    </Box>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="450"
                _hover={{ color: "#FF763F" }}
              >
                <Link to="/support">Support</Link>
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="450"
                _hover={{ color: "#FF763F" }}
                color={"rgb(38,42,59)"}
              >
                <Link to="/blog">Blog</Link>
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="450"
                _hover={{ color: "#FF763F" }}
                color={"rgb(38,42,59)"}
              >
                <Link>Forums</Link>
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="450"
                color={"rgb(38,42,59)"}
                _hover={{ color: "#FF763F" }}
              >
                <Link to="/about">About</Link>
              </Text>
            </Box>
            <Box>
              <Button
                w="8rem"
                border="2px solid #FF763F"
                color="rgb(38,42,59)"
                bgColor="white"
                fontWeight="600"
                fontSize="lg"
              >
                <Link to="/login"> Login</Link>
              </Button>
            </Box>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
