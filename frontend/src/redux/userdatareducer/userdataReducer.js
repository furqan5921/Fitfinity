import { ADDDATA, DELETEDATA, GETDATA, LOADING, TOTAL } from "./actionTypes"

const initState = {
    userdata:[],
    loading:false,
    totalprotein:1,
    totalcarbs:0,
    totalfat:0,
    totalcunsumed:0
}


export const userdataReducer = (state = initState, action) => {
    switch (action.type) {
        case ADDDATA:{
            return {
                ...state,userdata:[...state.userdata,action.payload]
            }
        }
        case GETDATA:{
            return {
                ...state,userdata:action.payload
            }
        }
        case DELETEDATA:{
            let fl=state.userdata.filter((el)=>el._id!=action.payload)
            return {
                ...state,userdata:fl
            }
        }
        case TOTAL:{
            let tp=1
            let tf=0
            let tcs=0
            let tcb=0
            for (let i=0;i<state.userdata.length;i++) {
                tp+=Number(state.userdata[i].protein.split("-")[0])
                tf+=Number(state.userdata[i].fat.split("-")[0])
                tcs+=Number(state.userdata[i].energy.split("-")[0])
                tcb+=Number(state.userdata[i].carbs.split("-")[0])
            }
            return {
                ...state,
                totalprotein:tp,
                totalcarbs:tcb,
                totalfat:tf,
                totalcunsumed:tcs
            }
        }
        default:
            return state
    }
}