import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// class component
class Content extends Component {
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

// function component
const Header = (props) => {
  const multiply = (a, b) => a * b;
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{props.title}</h1>
      <div>{props.num}</div>
      <div>
        {props.myArr[0]}, {props.myArr[1]}, {props.myArr[2]}
      </div>
      <Content
        myObj={props.myObj}
        myFunc={props.myFunc}
        myLambdaFunc={props.myLambdaFunc}
      />
      <Content
        myObj={{ name: "Delima", age: 18 }}
        myFunc={multiply}
        myLambdaFunc={(a, b) => a / b}
      />
    </header>
  );
};

class App extends Component {
  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="App">
        <Header
          title={"Hello, Iqdam here."}
          num={23}
          myArr={[1, 2, 3]}
          myObj={{ name: "Iqdam", age: 22 }}
          myFunc={this.add}
          myLambdaFunc={(a, b) => a - b}
        />
      </div>
    );
  }
}

export default App;
