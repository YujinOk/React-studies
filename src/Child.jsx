import React from "react";
import { useEffect, useState } from "react";

const Child = ({ favoriteNumber }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {!!favoriteNumber && `My favorite number is ${favoriteNumber}`}
      {/* My name is {name} and {age} years old */}
    </div>
  );
};

export default Child;
