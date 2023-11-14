import React, { useEffect, useState } from "react";
import "./app.scss";
import TodoItem from "./TodoItem";

const App = () => {
  const [toDoInput, setToDoInput] = useState("");
  const [toDos, setToDos] = useState([]);
  const handleChange = (e) => {
    setToDoInput(e.target.value);
  };

  const handleAddClick = () => {
    if (toDoInput.trim() !== "") {
      setToDos([...toDos, { task: toDoInput, completed: false }]);
      setToDoInput("");
    }
  };
  const handleCheckbox = (index) => {
    const updatedToDo = toDos.map((cur, i) =>
      i === index ? { ...cur, completed: !cur.completed } : cur
    );
    setToDos(updatedToDo);
  };

  const handleDeleteClick = (index) => {
    const notDeletedToDo = toDos.filter((cur, i) => i !== index);
    setToDos(notDeletedToDo);
  };

  return (
    <div>
      <ul id="list">
        {toDos.length > 0 &&
          toDos.map((cur, index) => (
            <TodoItem
              key={index}
              task={cur.task}
              completed={cur?.completed}
              toggleToDo={handleCheckbox}
              index={index}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
      </ul>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          onChange={handleChange}
          value={toDoInput}
        />
        <button onClick={handleAddClick}>Add Todo</button>
      </div>
    </div>
  );
};

export default App;
