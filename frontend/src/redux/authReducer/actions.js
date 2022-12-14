import axios from 'axios'
import { LOGIN, SIGNUP, VERIFYOTP } from './actionTypes';


export const signup = (details) => async (dispatch) => {
    let res = await axios.post('http://localhost:8080/users/signup', details)
    if (res.data.message === 'otp updated' || res.data.message === 'OTP Sent')
        dispatch({ type: SIGNUP, payload: true })
}

export const verifyOtp = (details) => async (dispatch) => {
    let res = await axios.post('http://localhost:8080/users/otp', details)
    console.log(res.data);
    if (res.data.message === 'signup successful')
        dispatch({ type: VERIFYOTP, payload: true })
}

export const login = (details) => async (dispatch) => {
    let res = await axios.post('http://localhost:8080/users/login', details)
    if (res.data.message === 'login successful')
        dispatch({ type: LOGIN, payload: res.data.token })
}
