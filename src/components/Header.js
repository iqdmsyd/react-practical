import React from "react";
import logo from "../logo.svg";
import { Content } from "./Content";

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

export default Header;

// good for autocompletion
export const SubHeader1 = () => {
  return <div>SubHeader1</div>;
};
export const SubHeader2 = () => {
  return <div>SubHeader2</div>;
};
