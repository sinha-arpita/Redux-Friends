import {FETCHING,SUCCESS,FAILURE}from  "../actions";

const initialState={
    fetching: false,
    // friendsFetched: false,
    // friendsSaved: false,
    // savingFriends: false,
    // updatingFriend: false,
    // friendUpdated: false,
    // deletingFriend: false,
    // friendDeleted: false,
    friends: [],
    error: null



}
export const friendsReducer = (state=initialState,action) => {
    console.log("Action is " + action.type);
    switch (action.type) {

        // Fill me in with the important reducers
        // action types should be FETCHING, SUCCESS and FAILURE
        // your switch statement should handle all of these cases.
        case FETCHING:
            return {...state,fetching:true,friends:[],error:null}

        case SUCCESS:
            return {...state,fetching:false,friends:action.payload,error:null}

        case FAILURE:
            return {...state,fetching:false,friends:[],error:action.payload}


        default:
            return state;
    }
};