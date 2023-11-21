import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./app.scss";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  const inputRef = useRef();
  const btnRef = useRef();
  const btn2Ref = useRef();

  const handleClickOutside = useCallback(
    (event) => {
      // when component mounts, these ref couldnt exist so early err handling
      if (!inputRef.current || !btnRef.current) return;

      if (
        !inputRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target) &&
        !btn2Ref.current.contains(event.target)
      ) {
        // if event.taget property arent the same as my input OR btn
        alert("add task2");
      }
    },
    [inputRef, btnRef]
  );

  useEffect(() => {
    if (inputRef.current && btnRef.current) {
      inputRef.current.focus();
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleAddTask = () => {
    if (todo.trim() !== "") {
      setTodos((prev) => [...prev, { task: todo, completed: false }]);
      setTodo("");
    }
  };

  const renderedTodos = useMemo(() => {
    return (
      <ul>
        {todos.length > 0 &&
          todos.map((cur, index) => <li key={index}>{cur.task}</li>)}
      </ul>
    );
  }, [todos]);
  console.log(todos);
  return (
    <div
      style={{
        background: isDarkMode ? "#333" : "white",
        color: isDarkMode ? "white" : "#333",
        minHeight: "100vh",
      }}
    >
      {renderedTodos}
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

      <button ref={btn2Ref} onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue((currentVal) => !currentVal);
  }

  return [value, toggle];
}
export default App;
