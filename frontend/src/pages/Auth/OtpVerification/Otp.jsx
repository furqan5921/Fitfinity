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
    HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp } from '../../../redux/authReducer/actions';
import FillDetails from '../../../components/FillDetails';
import SignupSuccess from '../../../components/SignupSuccess';
import { Navigate } from 'react-router-dom';

const Otp = () => {

    const [otp, setOtp] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const { otpVerified, wrongOtp, successOtp, invalidEmail } = useSelector(s => s.auth)

    const handleClick = () => {
        dispatch(verifyOtp({ otp, email }))
    }

    //when otpVerified == true redirect to login
    if(otpVerified){
        return <Navigate to='/login' />
    }


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
                         as='i'>
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

                    {
                        invalidEmail && <FillDetails text={'Invalid Email!'} />
                    }
                    {
                        wrongOtp && <FillDetails text={'Incorrect Otp!'} />
                    }
                    {
                        successOtp &&  <SignupSuccess text={'OTP Verified!'} />
                    }

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
