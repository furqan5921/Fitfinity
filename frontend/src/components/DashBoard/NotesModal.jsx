import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    Textarea,
    Stack,
    Box,
    Checkbox,
  } from "@chakra-ui/react";
import { useState } from "react";
//   import ModalTable from "./ModalTable";
  
  export function NotesModal({ isModalVisible, setIsModalVisible }) {
    let [value, setValue] = useState('')
    let [count,setCount]= useState(0)
    let handleInputChange = (e) => {
  if(count<250){
      let inputValue = e.target.value
      setValue(inputValue)
      setCount(value.length)
  }
    }

    const onClose = () => {
      setIsModalVisible(false);
    };
    return (
      <>
        {/*<Button onClick={onOpen}>Open Modal</Button>*/}
  
        <Modal isOpen={isModalVisible} onClose={onClose} size="4xl" height='20rem'  >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Note to Diary</ModalHeader>
            <ModalCloseButton />
            <ModalBody w={"100%"} fontSize='md' >
            <Textarea border={'1px solid'}
            borderRadius='1rem'
            fontSize='20px'
            value={value}
            height={'12rem'}
            focusBorderColor='black'
             onChange={handleInputChange}
        placeholder='Add Note ...'
        size='sm'
        
      />
       <Text>{count}/250</Text>
       <Stack direction={'row'} justifyContent='space-between' p={10} bgColor='blue.50' >
         <Box >Timestamp <Checkbox colorScheme='teal'  />  </Box>
         <Box >Diary Group <Checkbox colorScheme='teal'  /> </Box>
       </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
  