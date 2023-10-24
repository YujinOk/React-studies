import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item 1" },
    { id: crypto.randomUUID(), name: "Item 2" },
  ]);

  const addItem = () => {
    setItems((curItems) => {
      return [...curItems, { id: crypto.randomUUID(), name: "New Item" }];
    });
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <pre>
        {items.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {item.name}
              <input type="text" />
            </React.Fragment>
          );
        })}
      </pre>
    </div>
  );
};

export default App;
