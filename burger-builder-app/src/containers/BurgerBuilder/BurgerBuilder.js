import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
class BurgerBilder extends React.Component {
  state = {
    ingredients: {
      salad: 2,
      meat: 1,
      cheese: 5
    }
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger ingredients to Add</div>
      </Aux>
    );
  }
}

export default BurgerBilder;
