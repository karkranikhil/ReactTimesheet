import { USERS_TYPES } from "../actionTypes";

const initialState = {
    user : [],
    loading: true
}

const usersReducer = (state = initialState, action) => {
     switch(action.type) {
         case USERS_TYPES.GET_USERS:
             //console.log("a", action.payload)
             return {
                ...state,
                user: action.payload,
                loading:false
             }
         default :
            return state;
     }
}

export const loadData = data => ({ type: USERS_TYPES.GET_USERS, data });

export default usersReducer;