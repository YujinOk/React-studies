import React, { useState } from "react";
import TodoList from "./TodoList";
import Button from "./Button";
import "./app.scss";

function App() {
  const [arrItem, setArrItem] = useState(["A", "B", "C"]);
  const [inputVal, setInputVal] = useState("");
  const handleRemove = () => {
    console.log(1);
    setArrItem((arr) => {
      return [...arr.slice(1)];
    });
  };

  const handleRemoveLetterB = () => {
    setArrItem((arr) => arr.filter((cur) => cur !== "B"));
  };

  const handleAddToStart = () => {
    setArrItem((arr) => ["K", ...arr]);
  };

  const handleAddToEnd = () => {
    setArrItem((arr) => [...arr, "Y"]);
  };

  const handleClear = () => {
    setArrItem([]);
  };
  const handleReset = () => {
    setArrItem(["A", "B", "C"]);
  };

  const handleUpdateAllLetters = () => {
    setArrItem((arr) => arr.map((cur) => (cur === "A" ? "H" : cur)));
  };

  const handleUpdateNewLetter = () => {
    setArrItem((arr) => {
      const x = arr.push("kk");
      return [x, ...arr];
    });
  };

  const handleIputToState = () => {
    setArrItem((curArr) => [...curArr, inputVal]);
  };
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  console.log(arrItem);
  return (
    <div className="btn-container">
      <Button onClick={handleRemove}>Remove First Element</Button>
      <Button onClick={handleRemoveLetterB}>Remove All B's</Button>
      <Button onClick={handleAddToStart}>Add to Start</Button>
      <Button onClick={handleAddToEnd}>Add to End</Button>
      <Button onClick={handleClear}>Clear</Button>
      <Button onClick={handleReset}>Reset</Button>
      <Button onClick={handleUpdateAllLetters}>Update A to H</Button>
      <Button onClick={handleIputToState}>Connect input</Button>

      <Button onClick={handleUpdateNewLetter}>Add New Letter</Button>

      <input type="text" value={inputVal} onChange={handleChange} />
      {arrItem.join(", ")}
    </div>
  );
}

export default App;

// TodoListItem component
// Props: children=name, isComplete:boolean
// Checkbox (checked if complete)
// Label (children value)
