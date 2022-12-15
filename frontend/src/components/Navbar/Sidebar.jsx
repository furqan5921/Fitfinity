import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import logo from "../../Assets/logo.jpeg";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";
const Sidebar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  console.log(isOpen)
  const [arrow, setArrow] = useState(false);
  const handleArrow = () => {
    let status = !arrow;
    setArrow(status);
  };
  return (
    <Box display={["block", "block", "block", "none"]}>
      <Box>
        <Flex justifyContent="space-between" alignItems={"center"}>
          <Box w={"30%"} h="auto">
            <Image h={"80px"} src={logo} />
          </Box>
          <Box w={"15%"}>
            <IconButton
              aria-label="menu"
              display={{ base: "inline-flex", md: "inline-flex" }}
              icon={<FiMenu />}
              size="sm"
              onClick={onOpen}
            ></IconButton>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <Box display={"flex"} flexDirection="row-reverse">
                <IconButton
                  aria-label="menu"
                  icon={<RxCross2 />}
                  onClick={onClose}
                ></IconButton>
              </Box>
            </DrawerHeader>
            <DrawerBody>
              <VStack
                justifyContent="space-evenly"
                alignItems={"flex-start"}
                w="100%"
                gap={5}
              >
                <Popover>
                  <PopoverTrigger>
                    <Box>
                      <Button
                        fontSize="xl"
                        fontWeight="450"
                        onClick={handleArrow}
                        variant="ghost"
                        _hover={{ color: "#FF763F" }}
                      >
                        Products{" "}
                        {arrow ? <ChevronUpIcon /> : <ChevronDownIcon />}
                      </Button>
                    </Box>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                      <Flex>
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
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
