import React from "react";
import Person from "./Person/Person";

const persons = props => {
  return (
    <div>
      {props.data.map((person, index) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            changed={event => props.changed(event, index)}
            click={() => props.click(index)}
          />
        );
      })}
    </div>
  );
};

export default persons;
