import React from "react";
import TodoList from "./TodoList";

function Myname() {
  return <h1>Yujin Ok</h1>;
}
function App() {
  return (
    <div className="large" id="largerDiv">
      <TodoList />
      <Myname />
    </div>
  );
}

export default App;
