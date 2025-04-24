import { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    { text: "Eat", checked: true },
    { text: "App for WMO", checked: false },
    { text: "Sleep", checked: false },
  ]);
  const [newDo, setNewDo] = useState("");

  const handleAdd = () => {
    if (newDo.trim() !== "") {
      const newTodo = [{ text: newDo, checked: false }, ...todoList];
      setTodoList(newTodo);
      setNewDo("");
    }
  };

  const handleCheck = (i) => {
    const newTodo = [...todoList];
    newTodo[i].checked = !todoList[i].checked;
    setTodoList(newTodo);
  };

  const handleDelete = (i) => {
    const newTodo = [...todoList];
    newTodo.splice(i, 1);
    setTodoList(newTodo);
  };

  return (
    <div className="container todo">
      <h2>To Do</h2>
      <div className="todo-form">
        <input
          value={newDo}
          type="text"
          className="todo-input"
          placeholder="Add a ToDo"
          onChange={(e) => setNewDo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <button className="todo-button" onClick={handleAdd}>
          Add
        </button>
      </div>

      {todoList.map((todo, i) => (
        <div
          key={i}
          className={`todo-item ${todo.checked ? "completed" : ""}`}
          onClick={() => handleCheck(i)}
        >
          <label>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleCheck(i)}
            />
            {todo.text}
          </label>
          <button
            className="delete-button"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(i);
            }}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
