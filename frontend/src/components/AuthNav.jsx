import { Image, Text } from '@chakra-ui/react';
import React from 'react';
import '../pages/Auth/Signup/signup.css'
import logo from '../Assets/logo.jpeg'

const AuthNav = () => {
    return (
        <div id='topSec'>
            <Image borderRadius='10px' src={logo} alt="logo" />
            <Text as='b' fontSize={'2xl'} color='white' id='name'>FitFinity</Text>
        </div>
    );
}

export default AuthNav;
