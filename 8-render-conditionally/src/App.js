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
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />;
          })}
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
