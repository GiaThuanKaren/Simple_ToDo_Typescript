import React, { useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { ToDoItem } from "./models/TodoItem";
import { InputFullWidth } from "./Components/Input/input";
import { Button, Typography } from "@mui/material";

function App() {
  const [TodoItemText, SetTodoItem] = useState<String>("");

  const [ListTodo, SetListTodo] = useState<ToDoItem[]>([]);
  const HandleAddTodo = function () {
    SetListTodo([
      ...ListTodo,
      {
        name: TodoItemText,
        id: Math.random(),
      },
    ]);
  };
  // console.log(TodoItem);
  return (
    <>
      <div>
        <InputFullWidth
          todoText={TodoItemText}
          handleSetTodoItem={SetTodoItem}
        />
        <Button onClick={() => {
          HandleAddTodo()
        }} variant="contained">
          Add
        </Button>
        {/* {TodoItemText} */}
        {/* <Typography></Typography> */}
        {ListTodo.map((item, dix) => {
          return <Typography>{item.name}</Typography>;
        })}
      </div>
    </>
  );
}

export default App;
