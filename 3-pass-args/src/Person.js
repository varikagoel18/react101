import React from "react";

const person = props => {
  return (
    <p onClick={props.clickRef}>
      {props.name} aged {props.age} says {props.children}
    </p>
  );
};

export default person;
