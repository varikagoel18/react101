import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        {props.name} aged {props.age} says {props.children}
      </p>
      <input onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
