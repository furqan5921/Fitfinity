import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
function DashList({ src, title,onClick }) {
  return (
    <HStack
     fontSize={"md"} textTransform="uppercase" fontWeight={"600"}
     p={3}
     w='max-content'
     borderRadius='2rem'
     _hover={{ backgroundColor: 'blue.300' }}
     onClick={onClick}
     >
      <Image src={src} alt={title} />
      <Text> {title}</Text>
    </HStack>
  );
}

export default DashList;
