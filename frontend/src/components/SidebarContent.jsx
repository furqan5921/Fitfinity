import React from 'react';
import {
  Box,
  CloseButton,
  Divider,
  Flex,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import {
  FiHome,
  FiSettings,
  FiHelpCircle
} from 'react-icons/fi';
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
    return (
      <Box
        transition="3s ease"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        bgColor={'blackAlpha.800'}
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: '15%' }}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" color={'white'} fontWeight="bold">
          FitFinity
          </Text>
          {/* <CloseButton /> */}
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        <Divider orientation='horizontal' />
        {LinkItems.map((link) => (
          <DashboardNav key={link.name} icon={link.icon}>
            {link.name}
          </DashboardNav>
        ))}
      </Box>
    );
  };
  