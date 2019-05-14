import React, { Component } from "react";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import "./App.css";

class App extends Component {
  state = {
    UserName: "Guest"
  };

  nameChangeHandler = event => {
    this.setState({
      UserName: event.target.value
    });
  };

  render() {
    return (
      <div>
        <UserOutput content={this.state.UserName} />
        <UserInput
          changed={this.nameChangeHandler}
          name={this.state.UserName}
        />
        <UserOutput>First para</UserOutput>
        <UserOutput>Second para</UserOutput>
      </div>
    );
  }
}

export default App;
