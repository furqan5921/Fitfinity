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
      <Box className={styles.heading}>
        <Text
          textAlign={"center"}
          fontSize={["2xl", "4xl", "5xl"]}
          color={"white"}
          fontWeight={"extrabold"}
        >
          Cronometer Blog
        </Text>
        <Text
          textAlign={"center"}
          as="b"
          fontSize={["s", "m", "xl"]}
          color="white"
        >
          App Updates, Nutrition Tips & Inspiration
        </Text>
        <Box
          w={"75%"}
          display={["block,block,flex"]}
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          m={"auto"}
          p={"3%"}
          bg="white"
          borderRadius={"10px"}
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
        </Box>

        <Text as="b">RECENT POSTS</Text>

        <Grid
          w={"75%"}
          m="auto"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
        >
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
            <Text fontSize={["m", "xl", "2xl"]} fontWeight={"extrabold"}>
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
            <Text fontSize={["m", "xl", "2xl"]} fontWeight={"extrabold"}>
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
        <Box w="75%" m="auto">
          <Button rightIcon={<ArrowForwardIcon />}>VIEW MORE</Button>
        </Box>
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

      <Box padding={"100px 0px"}>
        <Flex w={"70%"} m={"auto"} gap={"20%"}>
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
        <Flex w={"70%"} m={"auto"} gap={"20%"}>
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
      </Box>

      <Box bg="#262a3b" padding={"50px 0px"}>
        <Flex w="65%" m="auto" justifyContent={"space-between"}>
          <Box w={"40%"}>
            <Text fontSize={"5xl"} color="white" fontWeight={"extrabold"}>
              Eat smarter. Live better.
            </Text>
            <Text color="white" fontSize={"xl"} fontWeight="medium">
              Track your foods, exercise, and health data with the Cronometer
              app.
            </Text>
          </Box>
          <Box m="auto">
            <Button fontSize={"xl"} bg={"#44d07b"} p="15px 35px">
              Sign Up - It's Free
            </Button>
          </Box>
        </Flex>
      </Box>

      <Box bg={"#f0f2fa"}>
        <Text>ON TREND</Text>
        <Heading>Popular Stories</Heading>
        <Flex w="75%" m="auto" gap={"4%"} justifyContent={"space-between"}>
          <Box
            borderRadius={"10px"}
            bg={"white"}
            w="48%"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            p="2%"
          >
            <Image
              height="300px"
              borderRadius={"10px"}
              w="100%"
              src="https://cronometer.com/blog/wp-content/uploads/2022/04/Untitled-design-6.png"
            />
            <Text fontSize={"xl"} fontWeight={"extrabold"}>
              Dietitians Discuss Diet And Eczema
            </Text>
            <Text>April 27, 2022</Text>
          </Box>
          <Box
            borderRadius={"10px"}
            bg={"white"}
            w="48%"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            p="2%"
          >
            <Image
              height="300px"
              borderRadius={"10px"}
              w="100%"
              src="https://cronometer.com/blog/wp-content/uploads/2022/04/IMG_7610-scaled.jpg"
            />
            <Text fontSize={"xl"} fontWeight={"extrabold"}>
              How Can Diet & Nutrition Affect Acne
            </Text>
            <Text>April 26, 2022</Text>
          </Box>
        </Flex>
        <Box w="75%" m="auto">
          <Button rightIcon={<ArrowForwardIcon />}>VIEW MORE</Button>
        </Box>
        <br />
        <br />

        <Text as="b">APP UPDATES</Text>

        <Grid
          w={"75%"}
          m="auto"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
        >
          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/06/Suunto.png"
            />
            <Text fontSize={"2xl"} fontWeight={"extrabold"}>
              New Device Integration: Suunto
            </Text>
            <Text>June 14, 2022</Text>
          </GridItem>

          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/06/Heart-rate-symbol.png"
            />
            <Text fontSize={"2xl"} fontWeight={"extrabold"}>
              How To: Track Your Heart Rate Over Time
            </Text>
            <Text>June 6, 2022</Text>
          </GridItem>

          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/05/Apple-watch-app-low-res.jpeg"
            />
            <Text fontSize={"2xl"} fontWeight={"extrabold"}>
              Now Available: Cronometer On Your Apple Watch
            </Text>
            <Text>June 1, 2022</Text>
          </GridItem>

          <GridItem className={styles.gridItems}>
            <Image
              h={"150px"}
              w={"100%"}
              borderRadius={"10px"}
              src="https://cronometer.com/blog/wp-content/uploads/2022/04/pexels-kampus-production-5920765-scaled.jpg"
            />
            <Text fontSize={"2xl"} fontWeight={"extrabold"}>
              Introducing Men’s Health Nutrition Score
            </Text>
            <Text>May 31, 2022</Text>
          </GridItem>
        </Grid>
        <Box w="75%" m="auto">
          <Button rightIcon={<ArrowForwardIcon />}>VIEW MORE</Button>
        </Box>
        <br />
        <br />

        <Text>COMMUNITY</Text>
        <Heading>Know Yourself</Heading>
        <Flex w="75%" m="auto" gap={"4%"} justifyContent={"space-between"}>
          <Box
            borderRadius={"10px"}
            bg={"white"}
            w="48%"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            p="2%"
          >
            <Image
              height="300px"
              borderRadius={"10px"}
              w="100%"
              src="https://cronometer.com/blog/wp-content/uploads/2022/03/20211010_122543-Copy-scaled-e1648237252449.jpeg"
            />
            <Text fontSize={"xl"} fontWeight={"extrabold"}>
              Meet Alex Marshall: Nutrition Coach & Know Yourself Ambassador
            </Text>
            <Text>Marxh 25, 2022</Text>
          </Box>
          <Box
            borderRadius={"10px"}
            bg={"white"}
            w="48%"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            p="2%"
          >
            <Image
              height="300px"
              borderRadius={"10px"}
              w="100%"
              src="https://cronometer.com/blog/wp-content/uploads/2022/01/Shirondale.jpg"
            />
            <Text fontSize={"xl"} fontWeight={"extrabold"}>
              Meet Shirondale: Know Yourself Ambassador
            </Text>
            <Text>January 14, 2022</Text>
          </Box>
        </Flex>
        <Box w="75%" m="auto">
          <Button rightIcon={<ArrowForwardIcon />}>VIEW MORE</Button>
        </Box>
      </Box>

      <Box>
        <Flex w="75%" m="auto" gap="8%" justifyContent={"space-between"}>
          <Flex w="46%" flexDirection={"column"} justifyContent="center">
            <Heading>
              Track your food, exercise and health metrics with the Cronometer
              app.
            </Heading>
            <br />
            <Button w="30%" fontSize={"xl"} color="white" bg="#ff6733">
              SIGN UP
            </Button>
          </Flex>
          <Box w="46%">
            <Image
              w="70%"
              src="https://cronometer.com/blog/wp-content/uploads/2022/11/crono-app.png"
            />
          </Box>
        </Flex>
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
