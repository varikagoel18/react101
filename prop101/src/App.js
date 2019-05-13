import React, { Component } from "react";
import "./App.css";
import Person from "./Person";

class App extends Component {
  render() {
    return (
      <div>
        <h1>First React Page</h1>
        <Person name="joe1" age="23">
          hello
        </Person>

        <Person name="poe" age="24">
          bye
        </Person>
      </div>
    );
  }
}

export default App;
