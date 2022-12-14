import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
const data = [
  {
    image: "https://cdn1.cronometer.com/webflow/cronometer-features-11.svg",
    title: "Track up to 84 nutrients and other compounds",
    desc: "Log your meals and track all your macro and micronutrients.",
  },
  {
    image: "https://cdn1.cronometer.com/webflow/cronometer-features-14.svg",
    title: "Log meals, exercise and health metrics",
    desc: "Plus, you can create custom foods, recipes, exercises and metrics.",
  },
  {
    image: "https://cdn1.cronometer.com/webflow/cronometer-features-13.svg",
    title: "Get valuable health reports and charts",
    desc: "Learn how nutrients and metrics correlate over time.",
  },
  {
    image: "https://cdn1.cronometer.com/webflow/cronometer-features-16.svg",
    title: "Custom diet settings",
    desc: "Set weight, macro and nutrient targets to meet your goals.",
  },
  {
    image: "https://cdn1.cronometer.com/webflow/cronometer-features-15.svg",
    title: "Fasting timer",
    desc: "Track your intermittent fasts and see their effect over time.",
  },
  {
    image: "https://cdn1.cronometer.com/webflow/cronometer-features-12.svg",
    title: "Diet support",
    desc: "Whether you’re Keto, Vegan, or on one recommended by your doctor.",
  },
];
const NutritionPage = () => {
  return (
    <Box p="4%" bg={"rgb(255,255,255)"}>
      <Box w="80%" m="auto">
        <Box w={["100%", "100%", "60%", "50%"]} m="auto">
          <Heading textAlign={"center"} size={["lg", "lg", "xl", "xl"]} as={"h1"}>
            Develop healthy habits
          </Heading>
          <Text textAlign={"center"} fontSize={["sm", "sm", "xl", "xl"]}>
            Count your calories, ensure you're meeting nutrient targets, and see
            your progress over time.
          </Text>
        </Box>
        <Box p={"1rem"} mt="3rem">
          <Grid
            templateColumns={[
              "repeat(1,1fr)",
              "repeat(1,1fr)",
              "repeat(3,1fr)",
              "repeat(3,1fr)",
            ]}
            gap={10}
          >
            {data.map(({ image, title, desc }, i) => (
              <GridItem key={i}>
                <VStack>
                  <Image w={"40%"} src={image} />
                  <Heading
                    textAlign={"center"}
                    size={["sm", "md", "lg", "lg"]}
                    as={"h1"}
                  >
                    {title}
                  </Heading>
                  <Text
                    textAlign={"center"}
                    fontSize={["sm", "sm", "sm", "lg"]}
                    
                  >
                    {desc}
                  </Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default NutritionPage;
