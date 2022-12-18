import axios from 'axios'
import { IMPORTDATA, LOADING } from './actionTypes'

export const getdata = () => async (dispatch) => {
    dispatch({type:LOADING})
    let res = await axios.get('http://localhost:8080/nutri')
    .then((e)=>(dispatch({type:IMPORTDATA, payload:e.data})))
    
}