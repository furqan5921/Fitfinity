import React from 'react';
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Text,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuButton,
  HStack,
  Avatar,
  VStack,
  Menu,
  Flex,
  IconButton,
  Spacer,
  Divider,
  Button
} from '@chakra-ui/react';
import { SidebarContent } from './SidebarContent';
import {  FiMenu } from 'react-icons/fi';
import {MdCampaign} from 'react-icons/md';
import {IoCaretDownSharp} from 'react-icons/io5'


export default function Sidebar({children}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Box minH="100vh" w='auto' m='auto' bg={useColorModeValue('pink.50', 'pink.100')}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 80 }} p="4">
          {children}
        </Box>
      </Box>
    );
  }

  export const MobileNav = ({ ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <Flex
        ml={{ base: 0, md: 0 }}
        px={{ base: 4, md: 4 }}
        height="8vh"
        alignItems="center"
        bg={useColorModeValue('gray.50', 'gray.100')}
        borderBottomWidth="1px"
        // border= '1px solid red'
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}>
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          fontWeight="bold">
          FitFinity
        </Text>
  
        <HStack  spacing={{ base: '0', md: '6' }}>
          <IconButton
            size="lg"
            colorScheme='red'
            variant="unstyled"
            fontSize='5vh'
            aria-label="open menu"
            icon={<MdCampaign color='red' />}
          />
          <Flex fontSize='20px' alignItems={'center'}>
            <Menu  >
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}>
                <HStack>
                   <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    
                    spacing="1px"
                    ml="2">
                    {/* <Text fontSize="sm">Justina Clark</Text> */}
                    <Text fontSize="25px" fontWeight={'bold'} color="cyan.800">
                      Account
                    </Text>
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <IoCaretDownSharp fontSize="20px" color="#086F83"  />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue('gray.800', 'gray.900')}
                w="30rem"
                p={30}
                borderColor={useColorModeValue('gray.800', 'gray.900')}>
                <Text color='white' as='p' >Current Account :</Text>
                <Text color='white'>aher.hemant7@gmail.com</Text>
                <Divider direction={'horizontal'} h={2} color='white'/>
              
                <Box borderTop={'2px solid white'} pt={2}>
                <Button colorScheme='gray' width='20vh' height={'5vh'} >Log out</Button>
                </Box>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    );
  };