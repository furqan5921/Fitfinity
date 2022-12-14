import { Button, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import AuthNav from '../../../components/AuthNav'
import './login.css'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div id='login'>
      <AuthNav />
      <div id='form'>
        <Text as='b' fontSize='2xl' >Welcome Back</Text>
        <br />
        <br />
        <FormLabel>Email</FormLabel>
        <Input placeholder='Email Address' />
        <br />
        <br />
        <FormLabel>Password</FormLabel>
        <Input placeholder='Password' />
        <Button marginTop={'6vh'}  backgroundColor='#004949' color='white'>SIGN UP</Button>
        <br /><br />
        <Link className='links'><Text as='i' color='#004949'>Forgot your password?</Text></Link>
        <br /><br />
        <Text>Not a member?</Text>
        <Link className='links'><Text as='i' color='#004949'>Sign Up</Text></Link>
        

      </div>

    </div>
  )
}
