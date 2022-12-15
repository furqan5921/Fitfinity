import { Button, FormLabel, Input, Text } from '@chakra-ui/react';
import AuthNav from '../../../components/AuthNav';
import './login.css';
import { Link } from 'react-router-dom';
import react from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/authReducer/actions';

export default function Login() {

  const [details, setDetails] = react.useState({
    email: "",
    password: ""
  })
  const dispatch = useDispatch()
  const { isAuth } = useSelector(s=>s.auth)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value })
  }

  const handleClick = () => {
    if (details.email && details.password) {
      if ((details.email).includes('@gmail.com')) {
        dispatch(login(details))
      } else
        console.log('give proper email');

    } else
      console.log('fill');
    //set state and set error
  }

  //redirect to dashboard if isAuth is true

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
        <Input name='password' onChange={handleChange} placeholder='Password' />
        <Button onClick={handleClick} marginTop={'6vh'} backgroundColor='#004949' color='white'>SIGN UP</Button>
        <br /><br />
        <Link className='links'><Text as='i' color='#004949'>Forgot your password?</Text></Link>
        <br /><br />
        <Text>Not a member?</Text>
        <Link className='links'><Text as='i' color='#004949'>Sign Up</Text></Link>


      </div>

    </div>
  )
}
