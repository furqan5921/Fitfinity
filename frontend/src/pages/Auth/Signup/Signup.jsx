import React, { useState } from 'react';
import './signup.css'
import AuthNav from '../../../components/AuthNav';
import { Button, Checkbox, FormLabel, HStack, Input, Radio, RadioGroup, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux'
import { fillSignupa, signup } from '../../../redux/authReducer/actions';
import FillDetails from '../../../components/FillDetails';
import UserExists from '../../../components/UserExists';
import SignupSuccess from '../../../components/SignupSuccess';
import { Navigate } from "react-router-dom"

const Signup = () => {

    const [details, setDetails] = useState({
        email: "",
        password: "",
        cPassword: "",
        sex: "male",
        birthday: "",
        height: "",
        weight: ""
    })
    const dispatch = useDispatch();
    const [tick, setTick] = useState(false)
    const { signupState, userExists, fillSignup } = useSelector(s => s.auth)

    const handleChange = (e) => {
        if (e === 'male' || e === 'female') {
            setDetails({ ...details, sex: e })
        } else {
            const { name, value } = e.target;
            setDetails({ ...details, [name]: value })
        }
    }

    const handleSubmit = () => {
        if (details.email && details.password && details.sex && details.birthday && details.height && details.weight) {
            if ((details.email).includes('@gmail.com'))
                if (details.password === details.cPassword) {
                    dispatch(fillSignupa(false))
                    dispatch(signup(details))

                }
                else
                    dispatch(fillSignupa(true))
            else
                dispatch(fillSignupa(true))

        } else {
            dispatch(fillSignupa(true))
        }
    }

    if(signupState){
        return <Navigate to='/otp' />
    }

    return (
        <div id='signup'>
            <AuthNav />

            <div id='parent'>
                <Text as='b' fontSize='2xl' >Create Your Free Account</Text>
                <div className='userCreds'>
                    <div>
                        <FormLabel>Email</FormLabel>
                        <Input name='email' onChange={handleChange} placeholder='Email Address' />
                    </div>
                    <div>
                        <FormLabel>Password</FormLabel>
                        <Input name='password' onChange={handleChange} placeholder='Password' type='password' />
                    </div>
                    <div>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input name='cPassword' onChange={handleChange} placeholder='Confirm Password' type='password' />
                    </div>

                    <div>
                        {
                            fillSignup && <FillDetails />
                        }
                        {
                            userExists && <UserExists />
                        }
                        {
                            signupState && <SignupSuccess />
                        }
                    </div>
                </div>

                <div className='userCreds'>
                    <Text as='b' fontSize='1xl' >Your Body Type</Text>
                    <br /><br />

                    <div>
                        <FormLabel>Sex</FormLabel>
                        <RadioGroup name='sex' onChange={handleChange} defaultValue='male'>
                            <HStack spacing='24px'>
                                <Radio value='male'>Male</Radio>
                                <Radio value='female'>Female</Radio>
                            </HStack>
                        </RadioGroup>
                    </div>

                    <div>
                        <FormLabel>Birthday</FormLabel>
                        <Input name='birthday' onChange={handleChange} type='date' placeholder='Email Address' />
                    </div>
                    <div>
                        <FormLabel>Height (cm)</FormLabel>
                        <Input name='height' onChange={handleChange} type='number' placeholder='Height' />
                    </div>
                    <div>
                        <FormLabel>Weight (kg)</FormLabel>
                        <Input name='weight' onChange={handleChange} type='number' placeholder='Weight' />
                    </div>

                </div>


                <div className='userCreds'>
                    <Text as='b' fontSize='1xl' >Terms of Service & Privacy Settings</Text>
                    <br /> <br />
                    <div>
                        <Checkbox onChange={(e) => setTick(e.target.checked)}>I agree to the Cronometer Terms of Service and Privacy Policy.</Checkbox>
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

                <Button onClick={handleSubmit} isDisabled={!tick} backgroundColor='#004949' color='white'>SIGN UP</Button>

                <div className='lastText'>
                    <Text fontSize='sm' as='b'>Need help?</Text>
                    <br />
                    <Text fontSize='sm' as='b' color='#FF763F'>support@cronometer.com</Text>
                </div>

            </div>


        </div>
    );
}

export default Signup;