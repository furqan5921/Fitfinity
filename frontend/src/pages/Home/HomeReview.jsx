import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const HomeReview = () => {
  return (
    <Box bgColor={"rgb(239,240,245)"}>
      <Box p={"4%"}>
        <Box>
          <Heading
            textAlign={"center"}
            size={["lg", "xl", "xl", "2xl"]}
            variant={"h1"}
            fontWeight={"extrabold"}
          >
            Fitfinity reviews
          </Heading>
          <VStack mt={["1rem", "1rem", "3rem", "3rem"]} gap={10}>
            <Flex
              w={"80%"}
              m="auto"
              flexDirection={["column", "column", "row", "row"]}
              bgColor={"white"}
              gap={10}
              alignItems={["center", "center", "flex-start", "flex-start"]}
              p="3rem"
            >
              <Box
                w={["90%", "90%", "48%", "48%"]}
                p={"1rem"}
                display={"flex"}
                flexDirection="column"
                gap={5}
              >
                <Heading
                  as={"h1"}
                  textAlign={["center", "center", "left", "left"]}
                  size={["sm", "sm", "md", "md"]}
                >
                  A great all-in-one health app!
                </Heading>
                <Box display={"flex"} justifyContent="center">
                  <Image
                    w={["50%", "40%", "20%", "20%"]}
                    src="https://cdn1.cronometer.com/webflow/ios-icon.svg"
                  />
                </Box>
              </Box>
              <Box
                w={["90%", "90%", "48%", "48%"]}
                display={"flex"}
                flexDirection="column"
                gap={5}
              >
                <Text textAlign={["center", "center", "left", "left"]}>
                  After leaving SparkPeople, I came here. I love that it is
                  Canadian, includes fasting, can import recipes, gives me macro
                  details, and more. This is my daily tracking app.
                </Text>
                <Heading
                  textAlign={["center", "center", "left", "left"]}
                  as={"xs"}
                  size="xs"
                >
                  iOS Review
                </Heading>
              </Box>
            </Flex>
            <Flex
              w={"80%"}
              m="auto"
              flexDirection={["column", "column", "row", "row"]}
              bgColor={"white"}
              gap={10}
              alignItems={["center", "center", "flex-start", "flex-start"]}
              p="3rem"
            >
              <Box
                w={["90%", "90%", "48%", "48%"]}
                p={"1rem"}
                display={"flex"}
                flexDirection="column"
                gap={5}
              >
                <Heading
                  as={"h1"}
                  textAlign={["center", "center", "left", "left"]}
                  size={["sm", "sm", "md", "md"]}
                >
                  Whether that's bodybuilding, weight loss, endurance training,
                  or just maintenance - everyone should be using Cronometer.
                </Heading>
                <Box display={"flex"} justifyContent="center">
                  <Image
                    w={["50%", "40%", "20%", "20%"]}
                    src="https://cdn1.cronometer.com/webflow/android-icon.svg"
                  />
                </Box>
              </Box>
              <Box
                w={["90%", "90%", "48%", "48%"]}
                display={"flex"}
                flexDirection="column"
                gap={5}
              >
                <Text textAlign={["center", "center", "left", "left"]}>
                  Awesome. Getting direct feedback when you track your food
                  really opens your eyes to what you're putting in your body.
                  The modularity and ability to track macros, micros, and
                  calories in -calories out makes this an invaluable tool for
                  any nutritional goal.
                </Text>
                <Heading
                  textAlign={["center", "center", "left", "left"]}
                  as={"xs"}
                  size="xs"
                >
                  Android Review
                </Heading>
              </Box>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeReview;
