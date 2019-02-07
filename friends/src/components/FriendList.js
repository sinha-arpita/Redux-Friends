import React, { Component } from 'react';
import Friend from "./Friend";

const FriendList = props => {
    console.log("Props", props.friends);
    return (
        <div>

                {props.friends.map(friend => {
                    return <Friend key={friend.id} friend={friend} />;
                })
                }

        </div>
    );
};


export default FriendList
