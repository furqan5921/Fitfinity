import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
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
          border={"1px solid red"}
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
        <Text as="b" w="75%" m={"auto"}>
          RECENT POSTS
        </Text>
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
      </Box>
    </>
  );
};

export default Blog;

{
  /* <GridItem w="100%">
            <Image src="https://cronometer.com/blog/wp-content/uploads/2022/09/cronometer-new-logo@2x.png" />
            <Text fontSize={"2xl"} fontWeight={"extrabold"}>
              Our New Look: The Details Behind Cronometer’s Makeover
            </Text>
            <Text>November 14, 2022</Text>
          </GridItem>
          <GridItem w="100%">
            <Image src="https://cronometer.com/blog/wp-content/uploads/2022/06/Blog-Img-New-Improved.png" />
            <Text fontSize={"2xl"} fontWeight={"extrabold"}>
              New & Improved: The Latest Cronometer Updates
            </Text>
            <Text>November 14, 2022</Text>
          </GridItem>
          <GridItem w="100%">
            <Image src="https://cronometer.com/blog/wp-content/uploads/2022/10/Blog-Img-Gummy-Bears.png" />
            <Text fontSize={"2xl"} fontWeight={"extrabold"}>
              A Look Into Sugar-Free Sensitivities
            </Text>
            <Text>October 27, 2022</Text>
          </GridItem> */
}
