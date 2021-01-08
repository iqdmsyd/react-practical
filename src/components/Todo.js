import React from "react";

const Todo = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
      <div
        style={{
          textDecoration: props.todo.completed ? "line-through" : "",
          cursor: "pointer",
        }}
        onClick={props.toggleCompleteTodo}
      >
        {props.todo.text}
      </div>
      <button onClick={props.deleteTodo}>x</button>
    </div>
  );
};

export default Todo;
