import React from "react";

import { connect } from "react-redux";

import  FriendList from "./FriendList";
import {friendsDisplay }from "../actions"

class FriendsView extends React.Component {
    constructor() {
        super();


    }


    componentDidMount() {
        // call our action
        console.log("componentDidMount ....")
        this.props.friendsDisplay();

    }

    render() {
        console.log("render ....", this.props.fetching);
        if (this.props.fetching) {
            return (
                <div>It's Loading</div>
            );
        }

        return (
            <div className="FriendsList_wrapper">
                <FriendList  friends={this.props.friends}/>
            </div>
        );

    }

}

function mapStateToProps(state) {
    console.log("State is", state);
    return {
        friends: state.friendsReducer.friends,
        fetching: state.friendsReducer.fetching

    }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
    mapStateToProps,
    {
        friendsDisplay
    }
)(FriendsView);

