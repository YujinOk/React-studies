import React, { useEffect, useState } from "react";
import "./app.scss";

const App = () => {
  const [toDo, setTodo] = useState("");
  const [toTos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddClick = () => {
    if (toDo.length > 0) {
      setTodos((toDos) => [...toDos, toDo]);
      setTodo("");
    }
  };

  const handleDeleteClick = (index) => {
    console.log(index);
    const notDeletedToDos = toTos.filter((cur, curIndex) => {
      return index !== curIndex;
    });

    setTodos(notDeletedToDos);
  };
  console.log(toTos);
  return (
    <>
      {toTos.length > 0 && (
        <ul id="list">
          {toTos.map((cur, index) => (
            <li className="list-item" key={index}>
              <label className="list-item-label">
                <input type="checkbox" data-list-item-checkbox />
                <span data-list-item-text>{cur}</span>
              </label>
              <button
                data-button-delete
                onClick={() => handleDeleteClick(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          onChange={handleChange}
          value={toDo}
        />
        <button onClick={handleAddClick}>Add Todo</button>
      </div>
    </>
  );
};

export default App;
