import React from "react";
import sprites from "../img/sprites.svg";
import TodoForm from "./TodoForm";
import useToggle from "../hooks/useToggle";

import useStyles from "../styles/TodoItemStyle";

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, toggleIsEditing] = useToggle(false);
  const classes = useStyles();

  const handleRemove = (event) => {
    deleteTodo(todo.id);
  };

  const handleDone = (event) => {
    updateTodo(todo.id, {
      task: todo.task,
      id: todo.id,
      completed: !todo.completed,
    });
  };

  const handleSubmit = (task) => {
    updateTodo(todo.id, { task: task, id: todo.id, completed: false });

    toggleIsEditing();
  };

  return (
    <div className={classes.TodoItem}>
      {!isEditing ? (
        <>
          <p
            className={`${classes.TodoItem_task} ${
              todo.completed && classes.done
            }`}
          >
            {todo.task}
          </p>
          <div className={classes.TodoItem_button_set}>
            <svg
              onClick={toggleIsEditing}
              className={`${classes.TodoItem_btn} ${classes.btn_edit}`}
            >
              <use xlinkHref={`${sprites}#icon-edit`}></use>
            </svg>

            <svg
              onClick={handleRemove}
              className={`${classes.TodoItem_btn} ${classes.btn_delete}`}
            >
              <use xlinkHref={`${sprites}#icon-remove`}></use>
            </svg>

            <svg
              onClick={handleDone}
              className={`${classes.TodoItem_btn} ${classes.btn_done}`}
            >
              <use xlinkHref={`${sprites}#icon-done`}></use>
            </svg>
          </div>
        </>
      ) : (
        <TodoForm submit={handleSubmit} text={todo.task} isItem={true} />
      )}
    </div>
  );
};

export default TodoItem;
