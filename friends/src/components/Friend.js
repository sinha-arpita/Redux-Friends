import React from "react";
import "./friend.css"

const Friend = props => {
    return <div  className="myCard">
        <div className="each">
            <div className="left">Name</div>
            <div className="update"> {props.friend.name}</div>
        </div>
        <div className="each">
            <div className="left">Age</div>
            <div className="update"> {props.friend.age}</div>
        </div>
        <div className="each">
            <div className="left">Email</div>
            <div className="update">{props.friend.email}></div>

        </div>
    </div>
}

export default Friend;
