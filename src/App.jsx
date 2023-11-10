import React, { useEffect, useState } from "react";
import "./app.scss";

const App = () => {
  const [toDo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log(toDo);
  return (
    <>
      {toDo && (
        <ul id="list">
          <li class="list-item">
            <label class="list-item-label">
              <input type="checkbox" data-list-item-checkbox />
              <span data-list-item-text>Item 1</span>
            </label>
            <button data-button-delete>Delete</button>
          </li>
          <li class="list-item">
            <label class="list-item-label">
              <input type="checkbox" checked data-list-item-checkbox />
              <span data-list-item-text>Item 2</span>
            </label>
            <button data-button-delete>Delete</button>
          </li>
        </ul>
      )}
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input type="text" id="todo-input" onChange={handleChange} />
        <button>Add Todo</button>
      </div>
    </>
  );
};

export default App;
