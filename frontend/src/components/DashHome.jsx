import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Progress,
  SimpleGrid,
  Stack,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BiometricModal } from "./DashBoard/BiometricModal";
import DashList from "./DashBoard/DashList";
import { ExerciseModal } from "./DashBoard/ExerciseModal";
import { FoodModal } from "./DashBoard/FoodModal";
import { NotesModal } from "./DashBoard/NotesModal";

function DashHome() {
  const [isFoodModalVisible, setIsFoodModalVisible] = useState(false);
  const [isExerciseModalVisible, setIsExerciseModalVisible] = useState(false);
  const [isBiometricModalVisible, setIsBiometricModalVisible] = useState(false);
  const [isNotesModalVisible, setIsNotesModalVisible] = useState(false);

  const FoodModalClick = () => {
    setIsFoodModalVisible(true);
    // onClose();
  };
  const ExerciseModalClick = () => {
    setIsExerciseModalVisible(true);
    // onClose();
  };

  const BioModalClick = () => {
    setIsBiometricModalVisible(true);
  };
  return (
    <Box h={"50rem"}>
      <Heading>Your Dashboard</Heading>

      <HStack
        spacing={20}
        m={10}
        p={3}
        w={"85%"}
        flexWrap="wrap"
        borderRadius="1rem"
        boxShadow={"lg"}
        bgColor="white"
      >
        <Heading fontSize={"25px"}> Quick Add to Diary</Heading>
        <DashList
          src="https://cdn1.cronometer.com/brand/svg/add-food-icon.svg"
          title="Food"
          onClick={FoodModalClick}
        />
        {isFoodModalVisible && (
          <FoodModal
            isModalVisible={isFoodModalVisible}
            setIsModalVisible={setIsFoodModalVisible}
          />
        )}
        <DashList
          src="https://cdn1.cronometer.com/brand/svg/add-exercise-icon.svg"
          title="Exercise"
          onClick={ExerciseModalClick}
        />
        {isExerciseModalVisible && (
          <ExerciseModal
            isModalVisible={isExerciseModalVisible}
            setIsModalVisible={setIsExerciseModalVisible}
          />
        )}

        <DashList
          src="https://cdn1.cronometer.com/brand/svg/add-biometric-icon.svg"
          title="Biometric"
          onClick={BioModalClick}
        />
        {isBiometricModalVisible && (
          <BiometricModal
            isModalVisible={isBiometricModalVisible}
            setIsModalVisible={setIsBiometricModalVisible}
          />
        )}

        <DashList
          src="https://cdn1.cronometer.com/brand/svg/add-note-icon.svg"
          title="Notes"
          onClick={() => {
            setIsNotesModalVisible(true);
          }}
        />
        {isNotesModalVisible && (
          <NotesModal
            isModalVisible={isNotesModalVisible}
            setIsModalVisible={setIsNotesModalVisible}
          />
        )}
      </HStack>
      <Flex gap={20} m={20} justifyContent="center" alignItems={"center"}>
        <Box
          bgColor="white"
          textAlign={"center"}
          p={"2rem"}
          pt="10rem"
          h={"30rem"}
          w="50%"
        >
          <Box h='40%'>

          </Box>
          <Heading>Cronometer <Text as='span' color='#FFD700' >Gold</Text></Heading>
          <Text>Get Gold for an ad-free experience.</Text>
          <Button colorScheme="teal" size="lg">
            {" "}
            SEE ALL FEATURES
          </Button>
        </Box>
        <Stack bgColor="white" w="50%"  spacing={10} p={5} textAlign={"left"}>
          <Box><Text as="b" align={"left"}>
            {" "}
            Fasting
          </Text>
          <Text color="grey" align={"center"} m={4}>
            {" "}
            No Currently Fasting
          </Text>
          </Box>
          <Box>
          <Text color="grey" align={"left"} m={2}>
            {" "}
            No Fast Schelduled
          </Text>
          <Progress
            colorScheme="teal"
            h="3vh"
            w="80%"
            m="auto"
            borderRadius="1rem"
            size="lg"
            value={0}
          />
          </Box>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
          <Button m="2rem"  colorScheme="teal" variant="outline">
            NEW FAST
          </Button>
          </Box>
          <Box
            border="1px solid grey"
            p={3}
            m={2}
            textAlign="center"
            textColor='grey'
            fontSize={'18px'}
            borderRadius={"1rem"}
          >
            <Text as='b' m={10} fontSize={'18px'}> Fasting Stats</Text>
            <SimpleGrid columns={[1, null, 2]} m='auto' w='90%' spacing="10px"   textAlign={'left'} fontSize={'18px'}>
              <Box bg="white" height="10%">
                <Text as="p">Completed Fasts :</Text>
                <Text as="p"> 0 </Text>
              </Box>
              <Box bg="white" height="10%">
                <Text as="p">Longest Fast :</Text>
                <Text as="p"> 0 Hours </Text>
              </Box>
              <Box bg="white" height="10%">
                <Text as="p">Total Time Fasting :</Text>
                <Text as="p"> 0 Hours</Text>
              </Box>
              <Box bg="white" height="10%">
                <Text as="p">7-Fast Average :</Text>
                <Text as="p"> 0 Hours</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default DashHome;
