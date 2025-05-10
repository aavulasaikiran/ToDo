//App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./ToDo";
import Home from "./Home";
import AddTodo from "./AddTodo";

function App() {
  const headStyle = {
    textAlign: "center",
  };
  return (
    <div>
      <h1 style={headStyle}>Todo List</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addTodoList" element={<AddTodo />}></Route>
          <Route path="/todoList" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
