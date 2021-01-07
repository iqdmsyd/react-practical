import React, { Component } from "react";
import "./App.css";
import MyHeader, { SubHeader1, SubHeader2 } from "./components/Header";

class App extends Component {
  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="App">
        <MyHeader
          title={"Hello, Iqdam here."}
          num={23}
          myArr={[1, 2, 3]}
          myObj={{ name: "Iqdam", age: 22 }}
          myFunc={this.add}
          myLambdaFunc={(a, b) => a - b}
        />
        <SubHeader1 />
        <SubHeader2 />
      </div>
    );
  }
}

export default App;
