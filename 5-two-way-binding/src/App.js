import React, { useState } from "react";
import Person from "./Person";
import "./App.css";

const App = props => {
  const [personstate, setPersonState] = useState({
    persons: [
      { name: "max", age: "25", msg: "hello" },
      { name: "sam", age: "35", msg: "bye" },
      { name: "tom", age: "22", msg: "hi" }
    ]
  });

  const [otherState, setOtherState] = useState("test state");

  console.log(personstate, otherState);

  const switchNameHandler = newName => {
    setPersonState({
      persons: [
        { name: newName, age: "27", msg: "bye" },
        { name: "samy", age: "37", msg: "hi" },
        { name: "tommmy", age: "25", msg: "hello" }
      ]
    });
  };

  const nameChangeHandler = event => {
    setPersonState({
      persons: [
        { name: "Max", age: "27", msg: "bye" },
        { name: event.target.value, age: "37", msg: "hi" },
        { name: "tommmy", age: "25", msg: "hello" }
      ]
    });
  };

  return (
    <div>
      <button onClick={switchNameHandler.bind(this, "MaxNewName")}>
        Switch Name
      </button>
      <Person
        name={personstate.persons[0].name}
        age={personstate.persons[0].age}
        clickRef={switchNameHandler.bind(this, "Maxi")}
      >
        {personstate.persons[0].msg}
      </Person>
      <Person
        name={personstate.persons[1].name}
        age={personstate.persons[1].age}
        changed={nameChangeHandler}
      >
        {personstate.persons[1].msg}
      </Person>
    </div>
  );
};

export default App;
