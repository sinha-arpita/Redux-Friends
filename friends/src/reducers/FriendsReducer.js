import {FETCHING,SUCCESS,FAILURE, UPDATE_FAILURE, UPDATE_SUCCESS}from  "../actions";

const initialState={
    fetching: false,


    friends: [],
    error: null,
    friendUpdated : false
}
export const friendsReducer = (state=initialState,action) => {
    console.log("Action is " + action.type);
    switch (action.type) {

        // Fill me in with the important reducers
        // action types should be FETCHING, SUCCESS and FAILURE
        // your switch statement should handle all of these cases.
        case FETCHING:
            return {...state,fetching:true,friends:[],error:null, friendUpdated  : false}

        case SUCCESS:
            return {...state,fetching:false,friends:action.payload,error:null, friendUpdated :false}

        case FAILURE:
            return {...state,fetching:false,friends:[],error:action.payload, friendUpdated :false}


        default:
            return state;
    }
};

export const friendsUpdateReducer = (state=initialState,action) => {
    console.log("friendsUpdateReducer Action is " + action.type);
    switch (action.type) {

        // Fill me in with the important reducers
        // action types should be FETCHING, SUCCESS and FAILURE
        // your switch statement should handle all of these cases.


        case UPDATE_SUCCESS:
            return {...state,fetching:false,friends:action.payload,error:null, friendUpdated :true}

        case UPDATE_FAILURE:
            return {...state,fetching:false,friends:[],error:action.payload,friendUpdated :false}

        default:
            return state;
    }
};