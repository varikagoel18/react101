import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "..//../UI/Button/Button";

const orderSummary = props => {
  const summary = Object.keys(props.ingredients).map(iKey => {
    return (
      <li key={iKey}>
        <span>
          {iKey} : {props.ingredients[iKey]}
        </span>
      </li>
    );
  });

  return (
    <Aux>
      <h2> Order Summary </h2>
      <p> Choosen Burger ingredients </p>
      <ul> {summary}</ul>
      <Button btnType="Danger" clicked={props.clickedCancel}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.clickedContinue}>
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
