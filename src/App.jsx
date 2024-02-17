// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const addBtn = () => {
    const items = {
      id: Math.floor(Math.random() * 1000000),
      value: item,
    };

    setNewItem((newArr) => [...newArr, items]);
    setItem("");
  };

  const deleteBtn = (id) => {
    const filterId = newItem.filter((ıtem) => ıtem.id !== id);
    setNewItem(filterId);
  };

  return (
    <div className="container">
      <div>
        <h1>Todo List App</h1>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button disabled={!item.trim()} onClick={() => addBtn()}>
          Add
        </button>
        <ul className="todo-list">
          {newItem.map((items) => {
            return (
              <li key={items.id}>
                {items.value}
                <button onClick={() => deleteBtn(items.id)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
