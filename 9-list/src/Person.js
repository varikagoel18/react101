import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        {props.name} aged {props.age} says {props.children}
      </p>
      <input onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
