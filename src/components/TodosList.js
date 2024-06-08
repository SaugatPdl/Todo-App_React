import React from "react";

const TodosList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-complete task-button"> {/* Marking item complete */}
              <i className="fa fa-check-circle"> </i>
            </button>
            <button className="button-edit task-button"> {/* editing item  */}
              <i className="fa fa-edit"> </i>
            </button>
            <button className="button-delete task-button">{/* deleting item  */}
              <i className="fa fa-trash"> </i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
