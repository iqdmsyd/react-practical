import React, { Component } from "react";
import shortid from "shortid";

export default class TodoForm extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      text: this.state.text,
      completed: false,
    };
    // add to TodoList
    this.props.addTodo(newTodo);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form>
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="add todo.."
            autoFocus
          />
          <button onClick={this.handleSubmit}>add</button>
        </form>
      </div>
    );
  }
}
