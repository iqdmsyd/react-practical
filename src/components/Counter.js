import { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div>
        <div>counter: {this.props.count}</div>
        <button onClick={this.props.decrement}>decrement</button>
        <button onClick={this.props.increment}>increment</button>
      </div>
    );
  }
}
