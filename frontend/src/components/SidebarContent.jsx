import React, { useState } from 'react';
import {
  Box,
  CloseButton,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FiHome,
  FiSettings,
  FiHelpCircle,
  FiMenu
} from 'react-icons/fi';
import {BiDollarCircle,BiInfoCircle } from 'react-icons/bi'
import {CiApple} from 'react-icons/ci';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import {ImFileZip} from 'react-icons/im';
import {HiChartBar} from 'react-icons/hi'
import { DashboardNav } from './DashboardNav';
import logo from "../Assets/logo.jpeg";
// import Google_Badge from "../Assets/Google_Badge.svg"
// import App_store from "../Assets/App_store.svg"
const LinkItems= [
    { name: 'Dashboard', icon: FiHome },
    { name: 'Diary', icon: ImFileZip },
    { name: 'Trends', icon: HiChartBar },
    { name: 'Foods', icon: CiApple },
    { name: 'Settings', icon: FiSettings },
    { name: 'Plans', icon: BiDollarCircle },
    { name: 'Help', icon: FiHelpCircle },
    { name: 'About', icon: BiInfoCircle },
  ];
  


export const SidebarContent = ({ onClose, ...rest }) => {
  const [navSize, changeNavSize] = useState("large")
    return (
      <Box
        transition="1.5s ease"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        bgColor={'blackAlpha.800'}
        borderTopRightRadius={'30px'}
        borderBottomRightRadius={'30px'}
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        // w={{ base: 'full', md: '15%' }}
        w={navSize === "small" ? "105px" : "18%"}
        pos="fixed"
        h="full"
        
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box display={'inline-block'}>
            <Image w={'40px'} h={'40px'} src={logo} alt='logo' />
          </Box>
          <Text fontSize="2xl"  display={navSize === "small" ? "none" : "block"} fontFamily="monospace" color={'white'} fontWeight="bold">
          FitFinity
          </Text>
          {/* <CloseButton /> */}
          <IconButton
                    background="none"
                    mt={5}
                    colorScheme='white'
                    _hover={{ background: 'none' }}
                    icon={<FiMenu size='lg' />}
                    onClick={() => {
                        if (navSize === "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        <Divider orientation='horizontal' />
        <Box 
        // h="200vh"
        overflow={'scroll'}
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'black',
            borderRadius: '24px',
          },
        }}>
          {navSize==='large'?LinkItems.map((link) => (
          <DashboardNav key={link.name} icon={link.icon}>
            {link.name}
          </DashboardNav>
        )):
        LinkItems.map((link) => (
            <DashboardNav key={link.name} icon={link.icon}>
              {/* {link.name} */}
            </DashboardNav>
          ))
    }
        <Divider orientation='horizontal' />
       <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="outline"
                      size="lg"
                      // bg="white"
                      colorScheme='whiteAlpha'
                      borderColor={'white'}
                      isRound={true}
                      _hover={{ bg: 'white' }}
                      icon={<FaTwitter size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="outline"
                      size="lg"
                      // bg="white"
                      colorScheme='whiteAlpha'
                      borderColor={'white'}
                      isRound={true}
                      _hover={{ bg: 'white' }}
                      icon={<FaFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="outline"
                      size="lg"
                      // bg="white"
                      colorScheme='whiteAlpha'
                      borderColor={'white'}
                      isRound={true}
                      _hover={{ bg: 'white' }}
                      icon={<FaInstagram size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="outline"
                      size="lg"
                      // bg="white"
                      colorScheme='whiteAlpha'
                      borderColor={'white'}
                      isRound={true}
                      _hover={{ bg: 'white' }}
                      icon={<FaYoutube size="28px" />}
                    />
                  </HStack>
                  </Box>
      </Box>
    );
  };
  
 