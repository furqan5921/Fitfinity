import {IMPORTDATA, LOADING} from "./actionTypes"

let initState = {
    datas:[],
    loading:false
}

export const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case LOADING:{
            return {
                ...state,loading:true
            }
        }
        case IMPORTDATA:{
            return {
                ...state,loading:false,
                datas:action.payload

            }
        }
        default:
            return state
    }
}