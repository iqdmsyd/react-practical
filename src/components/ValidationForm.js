import React, { Component } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export default class ValidationForm extends Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "name can not be blank";
    }
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (this.state.password.length < 8) {
      passwordError = "password must be longer than 8 character";
    }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    // prevent from refreshing the page
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="name"
          />
          <div style={{ color: "red", fontSize: 13 }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <div style={{ color: "red", fontSize: 13 }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <div style={{ color: "red", fontSize: 13 }}>
            {this.state.passwordError}
          </div>
        </div>

        <button type="submit">submit</button>
      </form>
    );
  }
}
