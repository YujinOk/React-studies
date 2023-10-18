import { useState } from "react";
import "./app.scss";
const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const handleAdd = () => {
    setAge((cur) => cur + 1);
  };

  const handleSubtract = () => {
    if (age <= 0) {
      alert("cannot go lower than 0");
    } else {
      setAge((cur) => cur - 1);
    }
  };
  return (
    <div className="container">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="btn-container">
        <button onClick={handleAdd}>+</button>
        {age}
        <button onClick={handleSubtract}>-</button>
      </div>
      My name is {name} and I am {age} years old.
    </div>
  );
};

export default App;
