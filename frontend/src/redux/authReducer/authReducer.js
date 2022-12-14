import { LOGIN, SIGNUP, VERIFYOTP } from "./actionTypes"

let initState = {
    token: localStorage.getItem('authToken'),
    isAuth: !!localStorage.getItem('authToken'),
    otpVerified: false,
    signupState: false
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case VERIFYOTP:
            return {
                ...state, otpVerified: action.payload
            }

        case SIGNUP:
            return {
                ...state, signupState: action.payload
            }

        case LOGIN:
            localStorage.setItem('authToken', action.payload)
            return {
                ...state, isAuth: true
            }
        default:
            return state
    }

}