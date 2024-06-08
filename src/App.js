import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/form";
import TodosList from "./components/TodosList";
import "./App.css";

const App = () => {
  // const initialState = JSON.parse(localStorage.getItem("todos")) || []; // yo mathiko namilera talako haleko
  const initialState = () => {
    try {
      const todosFromStorage = JSON.parse(localStorage.getItem("todos"));
      return todosFromStorage ? todosFromStorage : [];
    } catch (e) {
      return [];
    }
  };
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState); //keeping  tracks of all todo list items so we use usestate hooks and assign its value to empty array
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
