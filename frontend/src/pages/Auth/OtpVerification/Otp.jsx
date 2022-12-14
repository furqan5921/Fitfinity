import React, { useState } from 'react';
import AuthNav from '../../../components/AuthNav';
import './otp.css'
import { Center, Heading } from '@chakra-ui/react';
import {
    Button,
    FormControl,
    Flex,
    Input,
    Stack,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp } from '../../../redux/authReducer/actions';

const Otp = () => {

    const [otp, setOtp] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const { otpVerified } = useSelector(s=>s.auth)

    const handleClick = () => {
        dispatch(verifyOtp({otp, email}))
    }
    
    //when otpVerified == true redirect to login

    return (
        <div id='otp'>
            <AuthNav />
            <Flex
                marginTop='10vh'
                align={'center'}
                justify={'center'}
                bg={'transparent'}>
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'sm'}
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={10}>
                    <Center>
                        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                            Verify your Email
                        </Heading>
                    </Center>
                    <Center
                        fontSize={{ base: 'sm', sm: 'md' }}
                        color={useColorModeValue('gray.800', 'gray.400')} as='i'>
                        Please enter the Email used for signup and the code which has been sent to your email
                    </Center>
                    <FormControl>
                        <Center>
                            <Input onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
                            <br /><br /><br />
                        </Center>
                        <Center>
                            <HStack>
                                <PinInput onChange={(e) => setOtp(e)}>
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                </PinInput>
                            </HStack>
                        </Center>
                    </FormControl>
                    <Stack spacing={6}>
                        <Button
                            onClick={handleClick}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Verify
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </div>
    );
}

export default Otp;
