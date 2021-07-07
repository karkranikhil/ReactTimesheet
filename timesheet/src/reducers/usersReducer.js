import { USERS_TYPES } from "../actionTypes";

const initialState = {
    users : [],
    loading: true
}

const usersReducer = (state = initialState, action) => {
     switch(action.type) {
         case USERS_TYPES.GET_USERS:
             console.log("a", action.payload)
             return {
                ...state,
                users: action.payload,
                loading:false
             }
         default :
            return state;
     }
}

export default usersReducer;