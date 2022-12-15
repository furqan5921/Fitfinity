import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
// https://cdn1.cronometer.com/brand/svg/add-food-icon.svg
function DashList({ src, title,onClick }) {
  return (
    <HStack
     fontSize={"md"} textTransform="uppercase" fontWeight={"600"}
     p={3}
     borderRadius='2rem'
     onFocus={{ backgroundColor: 'blue.300' }}
     _hover={{ backgroundColor: 'blue.300' }}
     onClick={onClick}
     >
      <Image src={src} alt={title} />
      <Text> {title}</Text>
    </HStack>
  );
}

export default DashList;
