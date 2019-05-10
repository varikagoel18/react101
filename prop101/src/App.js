import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person";

class App extends Component {
  render() {
    return (
      <div>
        <h1>First React Page</h1>
        <Person />
      </div>
    );
  }
}

export default App;
