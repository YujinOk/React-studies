import { useState } from "react";
import Button from "./Button";

const INITIAL_VALUE = ["A", "B", "C"];
const App = () => {
  const [arrList, setArrList] = useState(INITIAL_VALUE);
  const [inputVal, setInputVal] = useState("");
  const removeTheFirstLetter = () => {
    setArrList((cur) => cur.slice(1));
  };

  const removeSpecificLetter = (letter) => {
    setArrList((cur) => cur.filter((el) => el !== letter));
  };

  const addToTheStart = (letter) => {
    setArrList((cur) => [letter, ...cur]);
  };

  const addToTheEnd = (letter) => {
    setArrList((cur) => [...cur, letter]);
  };

  const handleClear = () => {
    setArrList([]);
  };

  const handleReset = () => {
    setArrList(INITIAL_VALUE);
  };

  const handleUpdateAtoH = () => {
    setArrList((cur) => cur.map((el) => (el === "A" ? "H" : el)));
  };

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const addInputToTheStart = () => {
    setArrList((cur) => [inputVal, ...cur]);
  };

  const addAtAnyIndex = (el, index) => {
    setArrList((cur) => [...cur.slice(0, index), el, ...cur.slice(index)]);
    // numbers.splice(2, 0, 3);
  };
  return (
    <div>
      <Button name="Remove the first letter" onClick={removeTheFirstLetter} />
      <Button
        name="Remove specific letter"
        onClick={() => removeSpecificLetter("A")}
      />
      <Button
        name="Add a new element to the start"
        onClick={() => addToTheStart("K")}
      />
      <Button
        name="Add a new element to the end"
        onClick={() => addToTheEnd("Q")}
      />

      <Button name="Clear" onClick={handleClear} />
      <Button name="Reset" onClick={handleReset} />
      <Button name="Update A to H" onClick={handleUpdateAtoH} />
      <Button name="Add to the first" onClick={addInputToTheStart} />
      <Button
        name="add a new element at any index"
        onClick={() => addAtAnyIndex(inputVal, 2)}
      />

      <input type="text" value={inputVal} onChange={handleChange} />
      {arrList.join(", ")}
    </div>
  );
};

export default App;
