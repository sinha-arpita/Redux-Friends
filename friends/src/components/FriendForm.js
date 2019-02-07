import React, { Component } from 'react';
import {updateFriend,friendsDisplay} from "./../actions"
import {connect} from "react-redux";
//import "./FriendForm.css"


class FriendForm extends React.Component{

        constructor() {
            super()
            this.state = {
                inputName: "",
                inputAge: "",
                email: ""


            }

        }



        changeHandler = event=>{
         event.preventDefault();
         this.setState({[event.target.name]:event.target.value})

        }

        clickHandler=event=>{
            event.preventDefault();
            let friend = {
                 id : Date.now(),
                 name : this.state.inputName,
                 age:this.state.inputAge,
                email:this.state.inputemail
            }
            this.props.updateFriend(friend);
            this.setState({inputName:"",inputAge:"",email:""})
        }



    render(){

     return(
         <div>


             <form onSubmit ={this.submitHandler}className="form-body">
                 <div className="each">
                     <div className="left">Name</div>
                     <input type="text" placeholder="Enter name" name="inputName" value={this.state.inputName}
                         onChange={this.changeHandler}className="group" />
                 </div>
                 <div className="each">
                     <div className="left">Age</div>
                     <input type="text" placeholder="Enter Age" name="inputAge" value={this.state.inputAge}
                            onChange={this.changeHandler}className="group" />
                 </div>
                 <div className="each">
                     <div className="left">email</div>
                     <input type="text" placeholder="Enter email" name="email" value={this.state.email}
                            onChange={this.changeHandler}className="group" />
                 </div>
                 <button type="submit" onClick={this.clickHandler}className="form-btn"> Add New Friend</button>

         </form>
         </div>

     )

    }

}
export default connect(
    null,
    {
        updateFriend
    }
)(FriendForm);