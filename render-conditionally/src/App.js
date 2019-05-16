import React from "react";
import Person from "./Person";
import "./App.css";

class App extends React.Component {
  state = {
    persons: [
      { name: "max", age: "25", msg: "hello" },
      { name: "sam", age: "35", msg: "bye" },
      { name: "tom", age: "22", msg: "hi" }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
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

    return (
      <div>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
