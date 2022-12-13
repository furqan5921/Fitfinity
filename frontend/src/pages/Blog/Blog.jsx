import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";
import React from "react";
import styles from "./Blog.module.css";

// const recentPost = [
//   {
//     image:
//       "https://cronometer.com/blog/wp-content/uploads/2022/11/Blog-Img-DB.png",
//     text: "Mastering Diabetes with Cronometer",
//     date: "December 1, 2022",
//   },
//   {
//     image:
//       "https://cronometer.com/blog/wp-content/uploads/2022/09/cronometer-new-logo@2x.png",
//     text: "Our New Look: The Details Behind Cronometer’s Makeover",
//     date: "November 14, 2022",
//   },
//   {
//     image:
//       "https://cronometer.com/blog/wp-content/uploads/2022/06/Blog-Img-New-Improved.png",
//     text: "New & Improved: The Latest Cronometer Updates",
//     date: "November 14, 2022",
//   },
//   {
//     image:
//       "https://cronometer.com/blog/wp-content/uploads/2022/10/Blog-Img-Gummy-Bears.png",
//     text: "A Look Into Sugar-Free Sensitivities",
//     date: "October 27, 2022",
//   },
// ];

const Blog = () => {
  return (
    <>
      <Box>
        <Flex
          w={"75%"}
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          m={"auto"}
          p={"3%"}
          gap={"10%"}
        >
          <VStack w={"45%"}>
            <Heading>Eat Smater.</Heading>
            <Heading>Live Better.</Heading>
            <Text>
              Get to know the eating habits that make your body thrive. The
              Cronometer app lets you easily track your nutrition, helping you
              to live a healthier, happier life.
            </Text>
            <Button colorScheme="green">GET STARTED</Button>
          </VStack>
          <Box w={"60%"}>
            <video
              style={{ borderRadius: "10px" }}
              src={"https://youtu.be/R49fLnhMhIE"}
              width="100%"
              height="1000"
              controls
            ></video>
          </Box>
        </Flex>

        <Text as="b">RECENT POSTS</Text>

        <Grid w={"75%"} m="auto" templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/11/Blog-Img-DB.png"
            />
            <Text fontSize={"2xl"} fontWeight={"extrabold"}>
              Mastering Diabetes with Cronometer
            </Text>
            <Text>December 1, 2022</Text>
          </GridItem>

          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/09/cronometer-new-logo@2x.png"
            />
            <Text fontSize={"2xl"} fontWeight={"extrabold"}>
              Our New Look: The Details Behind Cronometer’s Makeover
            </Text>
            <Text>November 14, 2022</Text>
          </GridItem>

          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/06/Blog-Img-New-Improved.png"
            />
            <Text fontSize={"2xl"} fontWeight={"extrabold"}>
              New & Improved: The Latest Cronometer Updates
            </Text>
            <Text>November 14, 2022</Text>
          </GridItem>

          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/10/Blog-Img-Gummy-Bears.png"
            />
            <Text fontSize={"2xl"} fontWeight={"extrabold"}>
              A Look Into Sugar-Free Sensitivities
            </Text>
            <Text>October 27, 2022</Text>
          </GridItem>
        </Grid>
        <Button rightIcon={<ArrowForwardIcon />}>VIEW MORE</Button>
      </Box>

      <Box bg={"#f0f2fa"} m={"auto"} padding={"40px 0px"}>
        <Heading textAlign={"center"}>Blog Archives</Heading>
        <br />
        <HStack w={"60%"} m={"auto"} justifyContent={"space-between"}>
          <Text as={"b"} fontSize={"xl"}>
            NUTRITION
          </Text>
          <Text as={"b"} fontSize={"xl"}>
            FITNESS
          </Text>
          <Text as={"b"} fontSize={"xl"}>
            FEATURES
          </Text>
          <Text as={"b"} fontSize={"xl"}>
            RECIPES
          </Text>
          <Text as={"b"} fontSize={"xl"}>
            APP UPDATES
          </Text>
        </HStack>
        <br />
        <InputGroup w={"75%"} m={"auto"}>
          <Input bg={"white"} type="text" placeholder="Search Blog posts..." />
          <InputRightElement
            // pointerEvents="none"
            bg={"#ff6733"}
            borderRadius={"5px"}
            children={<SearchIcon color="white" />}
          />
        </InputGroup>
      </Box>

      <Box bg="grey">
        <br />
        <br />
        <Flex w={"75%"} m={"auto"} gap={"20%"}>
          <Box W={"35%"}>
            <Text>CRONO HACKS</Text>
            <Heading>Cronometer Tips & Tricks</Heading>
            <Text>
              Whether you’re a new or longtime user, here are some helpful tips
              to make the most of your nutrition tracking.
            </Text>
            <Button bg={"#ff6733"}>GRT THIS TIPS</Button>
          </Box>
          <Box w={"45%"}>
            <Image
              w="90%"
              textAlign={"center"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/11/tips-and-tricks-icon-2.png"
            />
          </Box>
        </Flex>
        <Flex w={"75%"} m={"auto"} gap={"20%"}>
          <Box w={"45%"}>
            <Image
              w="90%"
              textAlign={"center"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/11/tips-and-tricks-icon-2.png"
            />
          </Box>
          <Box W={"35%"}>
            <Text>APP UPDATES</Text>
            <Heading>New & Improved: The Latest Updates</Heading>
            <Text>
              Get up to date on all of the latest Cronometer updates, including
              cool new features like our Recipe Importer or Target Scheduler!
            </Text>
            <Button bg={"#ff6733"}>SEE WHAT'S NEW</Button>
          </Box>
        </Flex>
        <br />
        <br />
      </Box>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Blog;
