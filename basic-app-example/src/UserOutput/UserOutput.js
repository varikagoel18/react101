import React from "react";

const UserOutput = props => {
  return (
    <div>
      <p>{props.content}</p>
      <p>{props.children}</p>
    </div>
  );
};
export default UserOutput;
