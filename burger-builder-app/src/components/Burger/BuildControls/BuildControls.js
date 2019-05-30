import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" }
];
const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price : <strong>Rs {props.price.toFixed(2)}</strong>
      </p>
      {controls.map(item => {
        return (
          <BuildControl
            key={item.label}
            label={item.label}
            type={item.type}
            addIngredient={props.addIngredient}
            removeIngredient={props.removeIngredient}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
