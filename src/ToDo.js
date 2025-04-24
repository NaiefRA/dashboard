import { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    { text: "Eat", checked: true },
    { text: "App for WMO", checked: false },
    { text: "Sleep", checked: false },
  ]);
  const [newDo, setNewDo] = useState("");

  const handleAdd = () => {
    if (newDo !== "") {
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
      <div className="row">
        <input
          value={newDo}
          type="text"
          className="input-box"
          placeholder="Add a ToDo"
          onChange={(e) => {
            setNewDo(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      {todoList.map((todo, i) => {
        return (
          <div
            onClick={() => {
              handleCheck(i);
            }}
            className="todo-item"
            style={{
              color: "#222222",
              display: "flex",
              justifyContent: "space-between",
              margin: "5px",
              border: "2px grey solid",
              borderRadius: "20px",
              backgroundColor: todo.checked
                ? "rgb(110, 110, 110)"
                : "lightgrey",
              padding: "8px",
              userSelect: "none",
            }}
            key={i}
          >
            <div>
              <label className={todo.checked ? "checked" : ""}>
                {todo.text}
              </label>
            </div>
            <button
              style={{
                backgroundColor: todo.checked
                  ? "rgb(110, 110, 110)"
                  : "lightgrey",
                border: "none",
                fontSize: "1rem",
              }}
              className="del"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(i);
              }}
            >
              {"\u00D7"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
