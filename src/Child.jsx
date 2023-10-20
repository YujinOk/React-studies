import React from "react";
import { useEffect, useState } from "react";

const Child = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    console.log("Re-Render");
  });

  useEffect(() => {
    console.log("Hi");
    return () => {
      console.log("Bye");
    };
  }, []);

  useEffect(() => {
    console.log(`My name is ${name} and ${age} years old`);
  }, [name, age]);

  useEffect(() => {
    document.title = name;
    const timeId = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [name, age]);

  const handleChange = (e) => {
    setInputVal(e.target.value);
    setName(e.target.value);
  };
  return (
    <div>
      <input type="text" value={inputVal} onChange={handleChange} />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      My name is {name} and {age} years old
    </div>
  );
};

export default Child;
