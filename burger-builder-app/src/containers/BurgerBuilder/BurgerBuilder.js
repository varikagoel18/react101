import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    price: 4.0,
    purchasable: false,
    purchasing: false
  };

  updatePurchasable(ingredients) {
    const qty_arr = Object.keys(ingredients).map(ingKey => {
      return ingredients[ingKey];
    });

    const qty_total = qty_arr.reduce((qty_total, el) => {
      return qty_total + el;
    }, 0);
    this.setState({ purchasable: qty_total > 0 ? true : false });
  }

  addIngredientsHandler = type => {
    const old_qty = this.state.ingredients[type];
    const new_qty = old_qty + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = new_qty;
    const new_price = this.state.price + this.prices[type];
    this.setState({ ingredients: updatedIngredients, price: new_price });
    this.updatePurchasable(updatedIngredients);
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
    this.updatePurchasable(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  shopHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("Continue button clicked");
  };
  purchaseCancelHandler = () => {
    alert("Cancel button clicked");
  };

  render() {
    return (
      <Aux>
        <Modal show={this.state.purchasing} backClicked={this.shopHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            clickedContinue={this.purchaseContinueHandler}
            clickedCancel={this.purchaseCancelHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientsHandler}
          removeIngredient={this.removeIngredientsHandler}
          purchasable={this.state.purchasable}
          price={this.state.price}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBilder;
