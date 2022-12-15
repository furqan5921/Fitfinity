import { Box, Button, Flex, Heading, HStack, Progress, Stat, StatGroup, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { BiometricModal } from './DashBoard/BiometricModal'
import Listitem from './DashBoard/DashList'
import { ExerciseModal } from './DashBoard/ExerciseModal'
import { FoodModal } from './DashBoard/FoodModal'
import { NotesModal } from './DashBoard/NotesModal'

function DashHome() {
  const [isFoodModalVisible,setIsFoodModalVisible]= useState(false);
  const [isExerciseModalVisible,setIsExerciseModalVisible]= useState(false);
  const [isBiometricModalVisible,setIsBiometricModalVisible]= useState(false);
  const [isNotesModalVisible,setIsNotesModalVisible]= useState(false);

  const FoodModalClick=()=>{
    setIsFoodModalVisible(true);
    // onClose();
    }
    const ExerciseModalClick=()=>{
      setIsExerciseModalVisible(true);
      // onClose();
      }

      const BioModalClick=()=>{
        setIsBiometricModalVisible(true);
      }
  return (
    <Box h={'50rem'} >
      <Heading>Your Dashboard</Heading>
      
      <HStack spacing={20} m={10} p={3} w={'85%'} borderRadius='1rem' boxShadow={'lg'} bgColor='white'>
        <Heading fontSize={'25px'}>  Quick Add to Diary</Heading>
        <Listitem src='https://cdn1.cronometer.com/brand/svg/add-food-icon.svg' title='Food' onClick={FoodModalClick} />
        {isFoodModalVisible && (
            <FoodModal
              isModalVisible={isFoodModalVisible}
              setIsModalVisible={setIsFoodModalVisible}
            />
          )}
        <Listitem src='https://cdn1.cronometer.com/brand/svg/add-exercise-icon.svg' title='Exercise' onClick={ExerciseModalClick} />
        {isExerciseModalVisible && (
            <ExerciseModal
              isModalVisible={isExerciseModalVisible}
              setIsModalVisible={setIsExerciseModalVisible}
            />
          )}

        
        <Listitem src='https://cdn1.cronometer.com/brand/svg/add-biometric-icon.svg' title='Biometric' onClick={BioModalClick} />
        {isBiometricModalVisible && (
            <BiometricModal
              isModalVisible={isBiometricModalVisible}
              setIsModalVisible={setIsBiometricModalVisible}
            />
          )}


        <Listitem src='https://cdn1.cronometer.com/brand/svg/add-note-icon.svg' title='Notes' onClick={()=>{setIsNotesModalVisible(true)}} />
        {isNotesModalVisible && (
            <NotesModal
              isModalVisible={isNotesModalVisible}
              setIsModalVisible={setIsNotesModalVisible}
            />
          )}
      </HStack>
      <Flex gap={20} m={20} justifyContent='center' alignItems={'center'}>     
        <Box bgColor='white'textAlign={'center'} p={'2rem'} pt='10rem' h={'20rem'} w='50%' >
       <Heading>Cronometer Gold</Heading>
       <Text>Get Gold for an ad-free experience.</Text>
       <Button colorScheme='teal' size='lg'> SEE ALL FEATURES</Button>
      </Box>
      <Box bgColor='white' w='50%' p={2} textAlign={'center'}>
       <Text as='b' align={'left'}> Fasting</Text>
       <Text color='grey' align={'center'}> No Currently Fasting</Text>
       <Text color='grey' align={'left'}> No Fast Schelduled</Text>
       <Progress colorScheme='teal' h='3vh' w='80%' m='auto' borderRadius='1rem' size='lg' value={0} />
       <Button  m='auto' colorScheme='teal' variant='outline'> 
       NEW FAST
       </Button>

       <Box border='1px solid grey'p={3} textAling='center' borderRadius={'1rem'}>
         <Text> Fating Stats</Text>
       <StatGroup display={'flex'} flexWrap='wrap' gap={20}>
  <Stat w='40%'>
    <StatLabel>Sent</StatLabel>
    <StatNumber>345,670</StatNumber>
    
  </Stat>

  <Stat w='40%'>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
  </Stat>
  <Stat w='40%'> 
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
  </Stat>
  <Stat w='40%'>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
  </Stat>
</StatGroup>
       </Box>
      </Box>
      </Flex>
 
    </Box>
  )
}

export default DashHome
