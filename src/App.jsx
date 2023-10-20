import { useState, useEffect } from "react";
import "./app.scss";
import Child from "./Child";
const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const handleAdd = () => {
    setAge((cur) => cur + 1);
  };

  const person = { name };

  useEffect(() => {
    console.log(person);
  }, [person]);

  const handleSubtract = () => {
    if (age <= 0) {
      alert("cannot go lower than 0");
    } else {
      setAge((cur) => cur - 1);
    }
  };
  return (
    <div className="container">
      <Child />
    </div>
  );
};

export default App;
