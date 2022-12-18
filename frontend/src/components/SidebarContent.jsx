import React, { useState } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CloseButton,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
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
import logo from "../Assets/chotalogo.png";
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
        w={navSize === "small" ? {sm:'15%',md:"105px"} : {sm:'50%',md:"max-Content"}}
        pos="fixed"
        h="100vh"
        
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
                    colorScheme='white'
                    _hover={{ background: 'none' }}
                    icon={<FiMenu size='22px' />}
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
        h="75%"
        // overflowY={'scroll'}
        overflowY={'scroll'}
        css={{
          '&::-webkit-scrollbar': {
            width: '7px',
          },
          '&::-webkit-scrollbar-track': {
            width: '10px',
            scrollbarColor:'red',
            color:"white"
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'white',
            borderRadius: '10px',
          },
        }}>
          {navSize==='large'?
                <Box >
                   <Accordion color="white">
                  <AccordionItem border="none">
                    
                <DashboardNav icon={FiHome}href={'dashboard'}>
                      <AccordionButton fontSize={'22px'}>Dashboard
                      </AccordionButton>
                      </DashboardNav>
                      
                      </AccordionItem>
                      </Accordion>
                      <Accordion allowToggle color="white">
                  <AccordionItem border="none">
                    
                      
                <DashboardNav icon={ImFileZip}  href={'/dairy'}>
                <AccordionButton fontSize={'22px'}>Diary
                </AccordionButton>
                      </DashboardNav>
                      
                      </AccordionItem>
                      </Accordion>
                <Accordion allowToggle color="white">
                  <AccordionItem border="none">
                    <DashboardNav icon={HiChartBar}>
                      <AccordionButton fontSize={'22px'}>
                        Trends
                        <Spacer />
                        <AccordionIcon />
                      </AccordionButton>
                        </DashboardNav>
                    <AccordionPanel pb={4}>
                      
                      <DashboardNav >Charts</DashboardNav>
                      <DashboardNav >Nutrition Report</DashboardNav>
                      <DashboardNav >Print Report</DashboardNav>
                      <DashboardNav >Snapshots</DashboardNav>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle color="white">
                  <AccordionItem border="none">
                    
                    <DashboardNav icon={CiApple}>
                      <AccordionButton fontSize={'22px'}>
                        Foods
                        <Spacer />
                        <AccordionIcon />
                      </AccordionButton>
                        </DashboardNav>
                    
                    <AccordionPanel pb={4}>
                      <DashboardNav >Custom Recipies</DashboardNav>
                      <DashboardNav >Custom Foods</DashboardNav>
                      <DashboardNav >Ask the Oracle</DashboardNav>
                      <DashboardNav >Search Foods</DashboardNav>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle color="white">
                  <AccordionItem border="none">
                    
                    <DashboardNav icon={FiSettings}>
                      <AccordionButton fontSize={'22px'}>
                        Setting
                        <Spacer />
                        <AccordionIcon />
                      </AccordionButton>
                        </DashboardNav>
                    
                    <AccordionPanel pb={4}>
                      <DashboardNav >Account</DashboardNav>
                      <DashboardNav >Profile + Target</DashboardNav>
                      <DashboardNav >Target Scheldular</DashboardNav>
                      <DashboardNav >Fasting</DashboardNav>
                      <DashboardNav >Display</DashboardNav>
                      <DashboardNav >Devices</DashboardNav>
                      <DashboardNav >Sharing</DashboardNav>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle color="white">
                  <AccordionItem border="none">
                    
                <DashboardNav icon={BiDollarCircle}  href={'plans'}>
                <AccordionButton fontSize={'22px'}>
                        
                  Plans
                  </AccordionButton>
                  </DashboardNav>
                  
                  </AccordionItem>
                  </Accordion>
                  <Accordion allowToggle color="white">
                  <AccordionItem border="none">
                    
                <DashboardNav icon={FiHelpCircle}  href={'help'}>
                <AccordionButton fontSize={'22px'}>
                  Help
                  </AccordionButton>
                  </DashboardNav>
                  
                  </AccordionItem>
                  </Accordion>
                <Accordion allowToggle color="white">
                  <AccordionItem border="none">
                    
                    <DashboardNav icon={BiInfoCircle}>
                      <AccordionButton fontSize={'22px'}>
                        About
                        <Spacer />
                        <AccordionIcon />
                      </AccordionButton>
                        </DashboardNav>
                    
                    <AccordionPanel pb={4}>
                      <DashboardNav >Privacy</DashboardNav>
                      <DashboardNav >Terms of service</DashboardNav>
                      <DashboardNav >Blog</DashboardNav>
                      <DashboardNav >Forums</DashboardNav>
                      <DashboardNav >Support</DashboardNav>
                      <DashboardNav >About Us</DashboardNav>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
          
        :
        LinkItems.map((link) => (
            <DashboardNav key={link.name} icon={link.icon}>
              {/* {link.name} */}
            </DashboardNav>
          ))
    }
        <Divider orientation='horizontal' />
                  
       <HStack
                    mt={{ lg: 5, md: 6 }}
                    spacing={5}
                    flexWrap='wrap'
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="outline"
                      size="md"
                      // bg="white"
                      colorScheme='whiteAlpha'
                      borderColor={'white'}
                      isRound={true}
                      p={2}
                      _hover={{ bg: 'white' }}
                      icon={<FaTwitter/>}
                    />
                    <IconButton
                      aria-label="github"
                      variant="outline"
                      size="md"
                      // bg="white"

                      colorScheme='whiteAlpha'
                      borderColor={'white'}
                      isRound={true}
                      p={2}
                      _hover={{ bg: 'white' }}
                      icon={<FaFacebook  />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="outline"
                      size="md"
                      // bg="white"
                      colorScheme='whiteAlpha'
                      borderColor={'white'}
                      isRound={true}
                      p={2}
                      _hover={{ bg: 'white' }}
                      icon={<FaInstagram  />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="outline"
                      size="md"
                      // bg="white"
                      colorScheme='whiteAlpha'
                      borderColor={'white'}
                      isRound={true}
                      p={2}
                      _hover={{ bg: 'white' }}
                      icon={<FaYoutube  />}
                    />
                  </HStack>
                  </Box>
      </Box>
    );
  };
  
 