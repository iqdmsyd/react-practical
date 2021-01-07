import { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <div>counter: {this.state.count}</div>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
