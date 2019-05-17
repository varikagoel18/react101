import React from "react";
import Person from "./Person";
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
    const style = {
      backgroundColor: "Blue",
      font: "inherit",
      padding: "50x",
      margin: "5px",
      cursor: "pointer",
      textAlign: "center",
      alignContent: "center",
      color: "white"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangeHandler(event, index)}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, This is a React App</h1>
        <p>This is really working, HURRAY !!! </p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
