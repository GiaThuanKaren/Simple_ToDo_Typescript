import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { ToDoItem } from "./models/TodoItem";
import { InputFullWidth } from "./Components/Input/input";

function App() {
  const [TodoItem, SetTodoItem] = useState<String>("");
  console.log(TodoItem);
  return (
    <>
      <div>
        <InputFullWidth todoText={TodoItem} handleSetTodoItem={SetTodoItem} />
        {TodoItem}
      </div>
    </>
  );
}

export default App;
