import React from "react";

const cockpit = props => {
  return (
    <div>
      <button onClick={props.onClick}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;
