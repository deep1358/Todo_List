import React, { useState } from "react";
import Todo from "./todo";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [item, setItem] = useState([]);

  function change(e) {
    const newValue = e.target.value;
    setText(newValue);
  }

  function add() {
    setItem((pre) => {
      return [...pre, text];
    });
    setText("");
  }

  function delet(id) {
    setItem((pre) => {
      return pre.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="form">
        <input
          onChange={change}
          type="text"
          value={text}
          placeholder="Type to add"
        />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div class="ul">
        <ui>
          {item.map((todo, index) => (
            <Todo key={index} id={index} text={todo} onChecked={delet} />
          ))}
        </ui>
      </div>
      <h4>Click on any item to delete them</h4>
    </div>
  );
}
