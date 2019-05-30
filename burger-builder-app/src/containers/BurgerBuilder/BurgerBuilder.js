import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBilder extends React.Component {
  prices = {
    cheese: 1.5,
    salad: 1,
    meat: 2,
    bacon: 2.5
  };

  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      meat: 0,
      bacon: 0
    },
    price: 4.0
  };

  addIngredientsHandler = type => {
    const old_qty = this.state.ingredients[type];
    const new_qty = old_qty + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = new_qty;
    const new_price = this.state.price + this.prices[type];
    this.setState({ ingredients: updatedIngredients, price: new_price });
  };

  removeIngredientsHandler = type => {
    const old_qty = this.state.ingredients[type];
    if (old_qty === 0) return;
    const new_qty = old_qty - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = new_qty;
    const new_price = this.state.price - this.prices[type];
    this.setState({ ingredients: updatedIngredients, price: new_price });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientsHandler}
          removeIngredient={this.removeIngredientsHandler}
          price={this.state.price}
        />
      </Aux>
    );
  }
}

export default BurgerBilder;
