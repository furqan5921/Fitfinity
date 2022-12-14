import React, { useState } from 'react';
import {
  Box,
  CloseButton,
  Divider,
  Flex,
  IconButton,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import {
  FiHome,
  FiSettings,
  FiHelpCircle,
  FiMenu
} from 'react-icons/fi';
import logo from "../../Assets/logo.jpeg";

import {BiDollarCircle,BiInfoCircle } from 'react-icons/bi'
import {CiApple} from 'react-icons/ci';
import {ImFileZip} from 'react-icons/im';
import {HiChartBar} from 'react-icons/hi'
import { DashboardNav } from './DashboardNav';


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
        borderTopRightRadius={'30px'}
        borderBottomRightRadius={'30px'}
        bgColor={'blackAlpha.800'}
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        // w={{ base: 'full', md: 'max-content' }}
        w={navSize === "small" ? "105px" : "18%"}

        min-width={'15%'}
        pos="fixed"
        h="100%"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Box display={'inline-block'}>
            <Image w={10} h={10} src={logo} alt='logo' />
          </Box>
          <Text fontSize="2xl" fontFamily="monospace" color={'white'}
          display={navSize === "small" ? "none" : "block"} fontWeight="bold">
          FitFinity
          </Text>
          <IconButton
                    background="none"
                    mt={5}
                    colorScheme='white'
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
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
    
      </Box>
    );
  };
  

//   <Accordion allowToggle>
//   <AccordionItem>
//     <h2>
//       <AccordionButton>
//         <Box as="span" flex='1' textAlign='left'>
//           Section 1 title
//         </Box>
//         <AccordionIcon />
//       </AccordionButton>
//     </h2>
//     <AccordionPanel pb={4}>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//       commodo consequat.
//     </AccordionPanel>
//   </AccordionItem>
// </Accordion>