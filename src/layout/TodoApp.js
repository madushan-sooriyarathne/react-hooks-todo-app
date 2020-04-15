import React from "react";

import { TodoProvider } from "../contexts/TodoContext";

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import useStyles from "../styles/TodoAppStyles";

const TodoApp = () => {
  const classes = useStyles();

  return (
    <TodoProvider>
      <div className={classes.TodoApp}>
        <h1 className={classes.TodoApp_title}>TODO LIST.</h1>
        <TodoList />
        <TodoForm />
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
