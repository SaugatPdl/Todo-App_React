import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/form";
import TodosList from "./components/TodosList";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]); //keeping  tracks of all todo list items so we use usestate hooks and assign its value to empty array
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
          />
        </div>
        <div>
          <TodosList todos = {todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default App;
