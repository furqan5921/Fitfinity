import React from 'react';
import {
  Flex,
  Icon,
  Link
 
} from '@chakra-ui/react';
export const DashboardNav = ({ icon,href, children, ...rest }) => {
    return (
      <Link href={href} style={{ textDecoration: 'none' }} >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          fontSize={{base:"15px",sm:"18px",md:"23px"}}
          lineHeight={'1.3'}
          role="group"
              color={'white'}
              cursor="pointer"
          _hover={{
            bg: 'blackAlpha.600',
            color: 'orange',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="27px"
              lineHeight={'1.3'}
              _groupHover={{
                color: 'orange',
              }}
              color={'white'}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  };
  