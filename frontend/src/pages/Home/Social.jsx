import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Social = () => {
  return (
    <Box bg="rgb(250,251,255)">
      <Box w={"80%"} m="auto" p={"4%"}>
        <VStack gap={5}>
          <Box>
            <Text textAlign={"center"} fontSize={["sm", "sm", "sm", "lg"]}>
              As seen in
            </Text>
            <Box>
              <HStack gap={19}>
                <Image
                  w="32%"
                  src="https://cdn1.cronometer.com/webflow/media-mention-2.svg"
                  
                />
                <Image
                  w="32%"
                  src="https://cdn1.cronometer.com/webflow/media-mention-1.svg"
                />
                <Image
                  w="32%"
                  src="https://cdn1.cronometer.com/webflow/media-mention-3.svg"
                />
              </HStack>
            </Box>
          </Box>

          <Box>
            <Box>
              <Text textAlign={"center"} fontSize={["sm", "sm", "sm", "lg"]}>
                Available on Web, iOS and Android.
              </Text>
            </Box>
            <Box display={"flex"} gap="10%">
              <HStack>
                <Image
                  w="48%"
                  src="https://cdn1.cronometer.com/webflow/ios-icon.svg"
                  title="appleStore"
                />
                <Image
                  w="48%"
                  src="https://cdn1.cronometer.com/webflow/android-icon.svg"
                  title="androidStore"
                />
              </HStack>
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Social;
