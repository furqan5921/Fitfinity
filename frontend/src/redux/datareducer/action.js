import axios from 'axios'
import { IMPORTDATA, LOADING } from './actionTypes'

export const getdata = () => async (dispatch) => {
    dispatch({type:LOADING})
    axios.get('https://fitfinitybackend.onrender.com/nutri')
    .then((e)=>(dispatch({type:IMPORTDATA, payload:e.data})))
    
}