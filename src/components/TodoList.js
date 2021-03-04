import { React } from "react";

//Import components here

import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  //   console.log(filteredTodos);
  return (
    <div className="todo-continer">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
