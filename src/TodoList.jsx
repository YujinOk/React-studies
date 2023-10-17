function TodoList({ children, isComplete }) {
  return (
    <div>
      <input
        type="checkbox"
        id="scales"
        name="scales"
        defaultChecked={isComplete}
      />
      <label htmlFor="scales">{children}</label>
    </div>
  );
}

export default TodoList;
