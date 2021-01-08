import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("mounting...");
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}

export default App;
