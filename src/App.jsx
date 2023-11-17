import React, { useEffect, useRef, useState } from "react";
import "./app.scss";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    if (inputRef.current && btnRef.current) {
      inputRef.current.focus();
    } else {
      alert("add task1");
    }

    const handleClickOutside = (event) => {
      // when component mounts, these ref couldnt exist so early err handling
      if (!inputRef.current || !btnRef.current) return;
      // equiv. to these three conditions
      if (
        (!inputRef.current && btnRef.current) ||
        (inputRef.current && !btnRef.current) ||
        (!inputRef.current && !btnRef.current)
      )
        if (
          !inputRef.current.contains(event.target) &&
          !btnRef.current.contains(event.target)
        ) {
          // if event.taget property arent the same as my input OR btn
          alert("add task2");
        }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleAddTask = () => {
    if (todo.trim() !== "") {
      setTodos((prev) => [...prev, { task: todo, completed: false }]);
      setTodo("");
    }
  };
  return (
    <>
      <ul>
        {todos.length > 0 &&
          todos.map((cur, index) => <li key={index}>{cur.task}</li>)}
      </ul>
      <label htmlFor="name">
        <input
          type="text"
          ref={inputRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button ref={btnRef} onClick={handleAddTask}>
          Add task
        </button>
      </label>
    </>
  );
};

export default App;
