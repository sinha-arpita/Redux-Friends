import React from "react";
import "./friend.css"
import {connect} from "react-redux";
import {deleteFriend} from "../actions";

class Friend extends React.Component{
    constructor(){
     super();
      this.state={



      }
}
deleteFriend=()=>{

        this.props.deleteFriend(this.props.friend.id)
}

    render() {


        return <div className="myCard">
            <button onClick={this.deleteFriend}>X</button>
            <div className="each">
                <div className="left">Name</div>
                <div className="update"> {this.props.friend.name}</div>
            </div>
            <div className="each">
                <div className="left">Age</div>
                <div className="update"> {this.props.friend.age}</div>
            </div>
            <div className="each">
                <div className="left">Email</div>
                <div className="update">{this.props.friend.email}</div>

            </div>

        </div>
    }
}

export default connect(
    null,
    {
        deleteFriend
    }
)(Friend);
