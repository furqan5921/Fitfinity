import axios from "axios"
import { ADDDATA, DELETEDATA, LOADING, GETDATA, TOTAL } from "./actionTypes"

export const adddata = (data) => async (dispatch) => {
    let token=localStorage.getItem("authToken")
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    await axios.post('https://fitfinitybackend.onrender.com/userdata',data,config)    
    .then(()=>(dispatch({type:ADDDATA, payload:data}), dispatch({type:TOTAL})))
    .catch((e)=>console.log(e))
    
}


export const getuserdata = () => async (dispatch) => {
    let token=localStorage.getItem("authToken")
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    let res=await axios.get('https://fitfinitybackend.onrender.com/userdata',config)    
    .then((e)=>(dispatch({type:GETDATA, payload:e.data}), dispatch({type:TOTAL})))
    .catch((e)=>console.log(e))
    // dispatch({type:TOTAL})
}


export const deleteuserdata = (id) => async (dispatch) => {
    let token=localStorage.getItem("authToken")
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    console.log(id)
    await axios.delete(`https://fitfinitybackend.onrender.com/userdata/${id}`,config)    
    .then((e)=>(dispatch({type:DELETEDATA, payload:id}), dispatch({type:TOTAL})))
    .catch((e)=>console.log(e))
}