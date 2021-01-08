import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

/*
  TodoMVC
  1. add todo (done)
  2. display todos (done)
  3. cross off todo (todo)
  4. show number of active todos (done)
  5. filter all/active/complete (done)
  6. delete todo (todo)
  7. delete all complete (done)
     7.1 only show if atleast one is complete
 8. button to toggle all on/off (done)
*/

export default class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllCompleted: true,
  };

  addTodo = (todo) => {
    // spread operator to keep current todo, add new todo at the front
    this.setState((state) => ({ todos: [todo, ...state.todos] }));
  };

  toggleCompleteTodo = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) =>
        // if id match, toggle completed, else change nothing
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeTodoToShow = (s) => {
    this.setState({ todoToShow: s });
  };

  deleteTodo = (id) => {
    this.setState((state) => ({
      // filter all todo except the todo with id to be deleted
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  deleteAllTodosThatAreCompleted = () => {
    this.setState((state) => ({
      // filter all todos that are not completed
      todos: state.todos.filter((todo) => !todo.completed),
    }));
  };

  render() {
    let todos = [];
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.completed);
    } else if (this.state.todoToShow === "completed") {
      todos = this.state.todos.filter((todo) => todo.completed);
    }

    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleCompleteTodo={() => this.toggleCompleteTodo(todo.id)}
            deleteTodo={() => this.deleteTodo(todo.id)}
          />
        ))}
        <div>
          todos left:{" "}
          {this.state.todos.filter((todo) => !todo.completed).length}
        </div>
        <div>
          <button
            style={{
              backgroundColor: this.state.todoToShow === "all" ? "#ccc" : "",
            }}
            onClick={() => this.changeTodoToShow("all")}
          >
            all
          </button>
          <button
            style={{
              backgroundColor: this.state.todoToShow === "active" ? "#ccc" : "",
            }}
            onClick={() => this.changeTodoToShow("active")}
          >
            active
          </button>
          <button
            style={{
              backgroundColor:
                this.state.todoToShow === "completed" ? "#ccc" : "",
            }}
            onClick={() => this.changeTodoToShow("completed")}
          >
            completed
          </button>
        </div>
        <div>
          {this.state.todos.some((todo) => todo.completed) ? (
            <div>
              {" "}
              <button onClick={this.deleteAllTodosThatAreCompleted}>
                delete all todos
              </button>
            </div>
          ) : null}
        </div>
        <div>
          <button
            onClick={() =>
              this.setState((state) => ({
                todos: state.todos.map((todo) => ({
                  ...todo,
                  completed: state.toggleAllCompleted,
                })),
                toggleAllCompleted: !state.toggleAllCompleted,
              }))
            }
          >
            toggle complete all todos: {`${this.state.toggleAllCompleted}`}
          </button>
        </div>
      </div>
    );
  }
}
