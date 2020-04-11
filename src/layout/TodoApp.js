import React, { useEffect } from "react";

import useTodoState from "../hooks/useTodoState";

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import useStyles from "../styles/TodoAppStyles";

const TodoApp = () => {
  const [todoList, updateTodo, addNewTodo, removeTodo] = useTodoState(
    JSON.parse(window.localStorage.getItem("todoList")) || []
  );
  const classes = useStyles();

  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(todoList));
  });
  return (
    <div className={classes.TodoApp}>
      <h1 className={classes.TodoApp_title}>TODO LIST.</h1>
      <TodoList
        todoList={todoList}
        deleteTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <TodoForm submit={addNewTodo} />
    </div>
  );
};

export default TodoApp;
