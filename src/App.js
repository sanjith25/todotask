import React, { useState } from "react";
import './style.css';
import InputArea from "./components/InputArea";
import ToDoItems from "./components/ToDoItems";

function App() {
  const [items, setItems] = useState([]);

  const addItems = (inputText) => {
    setItems([...items, inputText]);
  };

  console.log(items)

  return (
    <div className="container">
      <div className="heading">
        <h1> To-Do List</h1>
      </div>
      <InputArea additems={addItems} />
      <div>
        <ul>
          {items.map((item, index) => {
          return  <ToDoItems key={index} text={item} />
  })}
        </ul>
      </div>
    </div>
  );
}

export default App;
