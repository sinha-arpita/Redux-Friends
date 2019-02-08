import axios from "axios"

export const FETCHING="FETCHING";
export const SUCCESS="SUCCESS";
export const FAILURE="FAILURE";
export const ADD_SUCCESS="ADD_SUCCESS";
export const DELETE_SUCCESS="DELETE_SUCCESS";
export const ADD_FAILURE="ADD_FAILURE";
export const DELETE_FAILURE="DELETE_FAILURE";

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

export function addFriend (friend){
    return (dispatch) => {


        console.log("friendsDisplay");
        axios.post("http://localhost:5000/api/friends/", friend)
            .then(res => {
                    console.log("New Friend is updated",res);

                dispatch({
                    type: ADD_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ADD_FAILURE,
                    payload: "friend not found"
                })
            })
    }
}
export function deleteFriend(id){

    return (dispatch)=>{
      console.log("Delete  + http://localhost:5000/api/friends/" +id)
      axios.delete("http://localhost:5000/api/friends/"+ id)
          .then(res=>{
              console.log("Friend is deleted",res)
            dispatch({
                type:DELETE_SUCCESS,
                payload:res.data
            })
          })
          .catch(err => {

              dispatch({
                  type: DELETE_FAILURE,
                  payload: "friend not deleted"
              })
          })
    }
}
