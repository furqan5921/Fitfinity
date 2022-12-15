import { Button, FormLabel, Input, Text } from '@chakra-ui/react';
import AuthNav from '../../../components/AuthNav';
import './login.css';
import { Link, Navigate } from 'react-router-dom';
import react from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/authReducer/actions';
import { useState } from 'react';
import FillDetails from '../../../components/FillDetails';
import SignupSuccess from '../../../components/SignupSuccess';

export default function Login() {

  const [details, setDetails] = react.useState({
    email: "",
    password: ""
  })
  const [fill, setFill] = useState(false)
  const dispatch = useDispatch()
  const { isAuth, wrongLoginCreds, redirectOtp } = useSelector(s => s.auth)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value })
  }

  const handleClick = () => {
    if (details.email && details.password) {
      if ((details.email).includes('@gmail.com')) {
        setFill(false)
        dispatch(login(details))
      } else
        setFill(true)
    } else
      setFill(true)
  }

  if(isAuth){
    return <Navigate to='/dashboard' />
  }

  if(redirectOtp){
    return <Navigate to='/otp' />
  }

  return (
    <div id='login'>
      <AuthNav />
      <div id='form'>
        <Text as='b' fontSize='2xl' >Welcome Back</Text>
        <br />
        <br />
        <FormLabel>Email</FormLabel>
        <Input name='email' onChange={handleChange} placeholder='Email Address' />
        <br />
        <br />
        <FormLabel>Password</FormLabel>
        <Input type='password' name='password' onChange={handleChange} placeholder='Password' />
        <div>
          {
            fill && <FillDetails text={'Please fill all the details!'} />
          }
          {
            wrongLoginCreds && <FillDetails text={'Wrong credentials!'} />
          }
          {
            redirectOtp && <FillDetails text={'Please verify OTP!'} />
          }
          {
            isAuth && <SignupSuccess text={'Login Successful!'} />
          }
        </div>
        <Button onClick={handleClick} marginTop={'6vh'} backgroundColor='#004949' color='white'>SIGN UP</Button>
        <br /><br />
        <Link className='links'><Text as='i' color='#004949'>Forgot your password?</Text></Link>
        <br /><br />
        <Text>Not a member?</Text>
        <Link to='/signup' className='links'><Text as='i' color='#004949'>Sign Up</Text></Link>


      </div>

    </div>
  )
}
