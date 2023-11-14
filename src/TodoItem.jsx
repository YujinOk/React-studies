import React from "react";

const TodoItem = ({
  task,
  completed,
  toggleToDo,
  index,
  handleDeleteClick,
}) => {
  return (
    <div>
      <li className="list-item">
        <label className="list-item-label">
          <input
            type="checkbox"
            data-list-item-checkbox
            checked={completed}
            onChange={() => toggleToDo(index)}
          />
          <span data-list-item-text>{task}</span>
        </label>
        <button data-button-delete onClick={() => handleDeleteClick(index)}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
