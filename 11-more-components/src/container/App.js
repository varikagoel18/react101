import React from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import "./App.css";

class App extends React.Component {
  state = {
    persons: [
      { id: "1", name: "max", age: "25", msg: "hello" },
      { id: "2", name: "sam", age: "35", msg: "bye" },
      { id: "3", name: "tom", age: "22", msg: "hi" }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  };

  nameChangeHandler = (event, index) => {
    const newPersons = [...this.state.persons];
    newPersons[index].name = event.target.value;
    this.setState({ persons: newPersons });
  };

  deletePersonHandler = index => {
    var newPersons = [...this.state.persons];
    newPersons.splice(index, 1);
    this.setState({ persons: newPersons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            data={this.state.persons}
            changed={this.nameChangeHandler}
            click={this.deletePersonHandler}
          />
        </div>
      );
    }

    return (
      <div>
        <Cockpit onClick={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
