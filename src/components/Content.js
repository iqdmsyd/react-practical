import React, { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{JSON.stringify(this.props.myObj)}</div>
        <div>{this.props.myFunc(1, 2)}</div>
        <div>{this.props.myLambdaFunc(10, 5)}</div>
      </div>
    );
  }
}
