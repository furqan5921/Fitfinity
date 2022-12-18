






export const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case LOADING:{
            return {
                ...state,loading:true
            }
        }
        case IMPORTDATA:{
            return {
                ...state,loading:false,data:action.payload
            }
        }
        default:
            return state
    }
}