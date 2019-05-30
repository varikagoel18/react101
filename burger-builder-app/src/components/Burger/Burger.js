import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = props => {
  var keys = Object.keys(props.ingredients);
  var transIngredients = keys.map(iKey => {
    return [...Array(props.ingredients[iKey])];
  });

  var BIjsx = transIngredients.map((value, i) => {
    return value.map((_, j) => {
      return <BurgerIngredient key={keys[i] + j} type={keys[i]} />;
    });
  });

  BIjsx = BIjsx.reduce((arr, el) => {
    return arr.concat(el);
  }, []);

  if (BIjsx.length === 0) {
    BIjsx = <p> Please add ingredients</p>;
  }
  console.log(BIjsx);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {BIjsx}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
