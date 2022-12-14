import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Synch from "../../Assets/cronometer-devices-3-p-2000.png";
const Sych = () => {
  return (
    <Box p="1%">
      <Box w={"70%"} m="auto">
        <Heading
          textAlign={"center"}
          fontWeight={"extrabold"}
          size={["lg", "xl", "xl", "2xl"]}
          variant={"h1"}
        >
          Sync with apps and devices
        </Heading>
        <Box mt={"2rem"}>
          <Image width={"100%"} src={Synch} />
        </Box>
      </Box>
    </Box>
  );
};

export default Sych;
