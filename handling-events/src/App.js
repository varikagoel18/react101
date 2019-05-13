import React, { Component } from "react";
import Person from "./Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "max", age: "25", msg: "hello" },
      { name: "sam", age: "35", msg: "bye" },
      { name: "tom", age: "22", msg: "hi" }
    ]
  };

  switchNameHandler = () => {
    console.log("button clicked");
  };

  render() {
    return (
      <div>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          {this.state.persons[0].msg}
        </Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          {this.state.persons[1].msg}
        </Person>
      </div>
    );
  }
}
export default App;
