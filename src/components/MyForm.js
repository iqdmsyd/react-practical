import React, { Component } from "react";

export default class MyForm extends Component {
  state = {
    name: "",
    address: "",
    rememberMe: false,
    title: "Mr.",
  };

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  handleSubmit = (event) => {
    // prevent from refreshing the page
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <textarea
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            name="rememberMe"
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <select
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option>Mr.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
