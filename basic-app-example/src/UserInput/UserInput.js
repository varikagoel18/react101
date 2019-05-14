import React from "react";
import "./UserInput.css";
const UserInput = props => {
  // const inputStyle = {
  //   padding: 8px;
  //   display: block;
  //   border: none;
  //   border-bottom: 1px solid #ccc;
  //   width: 100%;
  // };

  return (
    <div className="inputStyle">
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default UserInput;
