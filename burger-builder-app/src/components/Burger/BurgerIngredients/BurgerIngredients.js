import React from "react";
import classes from "./BurgerIngredients.css";
import PropTypes from "prop-types";

class BurgerIngredients extends React.Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}> </div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat}> </div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}> </div>;
        break;
      case "salad":
        ingredient = <div className={classes.Salad}> </div>;
        break;
      case "becon":
        ingredient = <div className={classes.Bacon}> </div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredients.propType = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredients;
