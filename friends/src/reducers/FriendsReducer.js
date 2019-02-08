import {FETCHING,SUCCESS,FAILURE, ADD_SUCCESS, ADD_FAILURE,DELETE_SUCCESS,DELETE_FAILURE}from  "../actions";

const initialState={
    fetching: false,


    friends: [],
    error: null,
    friendAdded : false,
    friendDeleted:false
}
export const friendsReducer = (state=initialState,action) => {
    console.log("Action is " + action.type);
    switch (action.type) {


        case FETCHING:
            return {...state,fetching:true,friends:[],error:null, friendAdded  : false}

        case SUCCESS:
            return {...state,fetching:false,friends:action.payload,error:null, friendAdded :false}

        case FAILURE:
            return {...state,fetching:false,friends:[],error:action.payload, friendAdded :false}


        default:
            return state;
    }
};

export const friendsAddReducer = (state=initialState,action) => {
    console.log("friendsAddReducer Action is " + action.type);
    switch (action.type) {
        case ADD_SUCCESS:
            return {...state,fetching:false,friends:action.payload,error:null, friendAdded :true,}

        case ADD_FAILURE:
            return {...state,fetching:false,friends:[],error:action.payload,friendAdded :false}

        case DELETE_SUCCESS:
            return {...state,fetching:false,friends:action.payload,error:null, friendAdded :true}

        case DELETE_FAILURE:
            return {...state,fetching:false,friends:[],error:action.payload,friendAdded :false}
        default:
            return state;
    }
};
