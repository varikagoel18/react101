import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <BurgerBilder />
      </Layout>
    );
  }
}

export default App;
