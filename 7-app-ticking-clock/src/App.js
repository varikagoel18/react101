import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    time: new Date().toLocaleTimeString()
  };

  updateTimeHandler = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  };
  
  render() {
    {
      setInterval(this.updateTimeHandler, 1000);
    }

    return (
      <div className="App">
        <h1>Hello, world!</h1>
        <h2>It is {this.state.time} .</h2>
      </div>
    );
  }
}

//setInterval(App, 100);
export default App;
