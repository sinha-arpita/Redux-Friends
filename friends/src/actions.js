import axios from "axios"

export const FETCHING="FETCHING";
export const SUCCESS="SUCCESS";
export const FAILURE="FAILURE";

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
