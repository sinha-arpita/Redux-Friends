import React, { Component } from 'react';
import {connect} from "react-redux";
import FriendsView from "./components/FriendsView"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <FriendsView/>
      </div>
    );
  }
}

export default connect() (App);
