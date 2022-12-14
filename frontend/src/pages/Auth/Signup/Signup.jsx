import React from 'react';
import './signup.css'

import AuthNav from '../../../components/AuthNav';
import { Button, Checkbox, FormLabel, HStack, Input, Radio, RadioGroup, Text } from '@chakra-ui/react';

const Signup = () => {
    return (
        <div id='signup'>
            <AuthNav />

            <div id='parent'>
                <Text as='b' fontSize='2xl' >Create Your Free Account</Text>
                <div className='userCreds'>
                    <div>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Email Address' />
                    </div>
                    <div>
                        <FormLabel>Password</FormLabel>
                        <Input placeholder='Password' type='password' />
                    </div>
                    <div>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input placeholder='Confirm Password' type='password' />
                    </div>
                </div>

                <div className='userCreds'>
                    <Text as='b' fontSize='1xl' >Your Body Type</Text>
                    <br /><br />

                    <div>
                        <FormLabel>Sex</FormLabel>
                        <RadioGroup defaultValue='Itachi'>
                            <HStack spacing='24px'>
                                <Radio value='male'>Male</Radio>
                                <Radio value='female'>Female</Radio>
                            </HStack>
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel>Birthday</FormLabel>
                        <Input type='date' placeholder='Email Address' />
                    </div>
                    <div>
                        <FormLabel>Height (cm)</FormLabel>
                        <Input type='number' placeholder='Height' />
                    </div>
                    <div>
                        <FormLabel>Weight (kg)</FormLabel>
                        <Input type='number' placeholder='Weight' />
                    </div>

                </div>


                <div className='userCreds'>
                    <Text as='b' fontSize='1xl' >Terms of Service & Privacy Settings</Text>
                    <br /> <br />
                    <div>
                        <Checkbox >I agree to the Cronometer Terms of Service and Privacy Policy.</Checkbox>
                    </div>
                    <br />
                    <Text as='b' fontSize='sm'>In order to give you the best experience using Cronometer, we need certain data permissions. (These are optional and can be updated in your settings any time.)</Text>
                    <br />
                    <div>
                        <Checkbox >I agree to receive Cronometer newsletter and promotional emails. (You can opt out at any time.)</Checkbox>

                    </div>
                    <br />
                    <div>
                        <Checkbox >
                            I agree to receive personalized in-app ads.
                            (You will receive less relevant, non-personalized ads if you opt out)</Checkbox>
                    </div>
                </div>
   
                <Button isDisabled={false} backgroundColor='#004949' color='white'>SIGN UP</Button>

                <div  className='lastText'>
                <Text fontSize='sm' as='b'>Need help?</Text>
                <br />
                <Text fontSize='sm' as='b' color='#FF763F'>support@cronometer.com</Text>
                </div>

            </div>


        </div>
    );
}

export default Signup;