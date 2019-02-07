import axios from "axios"

export const FETCHING="FETCHING";
export const SUCCESS="SUCCESS";
export const FAILURE="FAILURE";
export const UPDATE_SUCCESS="UPDATE_SUCCESS";
export const UPDATE_FAILURE="UPDATE_FAILURE";

export function friendsDisplay () {

    return (dispatch) => {
        dispatch({type: FETCHING, payload:[]})


        console.log("friendsDisplay");
        axios.get("http://localhost:5000/api/friends/")
            .then(res => {
                console.log("success msg",res);
                dispatch({
                    type: SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: FAILURE,
                    payload: "friend not found"
                })
            })
    }
}

export function updateFriend (friend){
    return (dispatch) => {


        console.log("friendsDisplay");
        axios.post("http://localhost:5000/api/friends/", friend)
            .then(res => {
                    console.log("New Friend is updated",res);
                dispatch({
                    type: UPDATE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: UPDATE_FAILURE,
                    payload: "friend not found"
                })
            })
    }
}
