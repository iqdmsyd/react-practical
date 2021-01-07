import React from "react";
import logo from "../logo.svg";

const Header = (props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{props.title}</h1>
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
