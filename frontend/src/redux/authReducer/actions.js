import axios from 'axios'
import { FILLSIGNUP, LOGIN, SIGNUP, VERIFYOTP } from './actionTypes';


export const signup = (details) => async (dispatch) => {
    let res = await axios.post('http://localhost:8080/users/signup', details)
    if (res.data.message === 'otp updated' || res.data.message === 'OTP Sent')
        dispatch({ type: SIGNUP, payload: true })
    else if (res.data === 'user already exists')
        dispatch({ type: SIGNUP, payload: false })
}

export const verifyOtp = (details) => async (dispatch) => {
    let res = await axios.post('http://localhost:8080/users/otp', details)
    if (res.data.message === 'signup successful')
        dispatch({ type: VERIFYOTP, payload: true })
    else if (res.data.message === 'wrong otp')
        dispatch({ type: VERIFYOTP, payload: false })
    else
        dispatch({ type: VERIFYOTP, payload: 'email invalid' })
}

export const login = (details) => async (dispatch) => {
    let res = await axios.post('http://localhost:8080/users/login', details)
    if (res.data.message === 'login successful')
        dispatch({ type: LOGIN, payload: { token: res.data.token } })
    else if (res.data.message === 'wrong credentials')
        dispatch({ type: LOGIN, payload: 'wrong credentials' })
    else if (res.data.message === 'verify otp')
        dispatch({ type: LOGIN, payload: 'verify otp' })

}

export const fillSignupa = (value) => (dispatch) => {
    dispatch({ type: FILLSIGNUP, payload: value })
}
