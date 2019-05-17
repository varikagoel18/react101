import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    name: "User",
    age: 23,
    address: "Home, CA, US"
  }

  render() {
    return (
      <div >
        <p>{this.state.name} , {this.state.age}, {this.state.address}</p>
      </div>
    )
  };
}

export default App;
