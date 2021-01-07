import React, { Component } from "react";

export default class MyForm extends Component {
  state = {
    name: "",
    address: "",
    rememberMe: false,
    title: "Mr.",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeTextarea = (event) => {
    this.setState({ address: event.target.value });
  };

  handleCheck = (event) => {
    this.setState({ rememberMe: event.target.checked });
  };

  handleSelect = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div>
          <input value={this.state.name} onChange={this.handleChange} />
        </div>
        <div>
          <textarea
            value={this.state.address}
            onChange={this.handleChangeTextarea}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleCheck}
          />
        </div>
        <div>
          <select value={this.state.title} onChange={this.handleSelect}>
            <option>Mr.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}
