import React, { memo, useContext } from "react";
import sprites from "../img/sprites.svg";
import TodoForm from "./TodoForm";
import useToggle from "../hooks/useToggle";

import useStyles from "../styles/TodoItemStyle";
import { DispatchContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  //Context
  const dispatch = useContext(DispatchContext);

  // JSS styles
  const classes = useStyles();

  //State
  const [isEditing, toggleIsEditing] = useToggle(false);

  // Event handlers
  // Remove Btn Event handler
  const handleRemove = (event) => {
    dispatch({ type: "REMOVE", id: todo.id });
  };

  // Check Btn Event handler
  const handleDone = (event) => {
    dispatch({ type: "TOGGLE", id: todo.id });
  };

  // Event handler for the edit form
  const handleSubmit = (task) => {
    dispatch({ type: "EDIT", id: todo.id, task: task });
    toggleIsEditing();
  };

  const formatText = (text) => {
    const arr = text.split("");
    if (arr.filter((c) => c === " ").length < 1) {
      for (let i = 25; i < arr.length; i += 25) {
        arr.splice(i, 0, " ");
      }
    }

    return arr.toString().replace(/,/g, "");
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
            {formatText(todo.task)}
          </p>
          <div className={classes.TodoItem_button_set}>
            <button
              onClick={toggleIsEditing}
              className={`${classes.TodoItem_btn} ${classes.btn_edit}`}
            >
              <svg>
                <use xlinkHref={`${sprites}#icon-edit`}></use>
              </svg>
            </button>
            <button
              onClick={handleRemove}
              className={`${classes.TodoItem_btn} ${classes.btn_delete}`}
            >
              <svg>
                <use xlinkHref={`${sprites}#icon-remove`}></use>
              </svg>
            </button>
            <button
              onClick={handleDone}
              className={`${classes.TodoItem_btn} ${classes.btn_done}`}
            >
              <svg>
                <use xlinkHref={`${sprites}#icon-done`}></use>
              </svg>
            </button>
          </div>
        </>
      ) : (
        <TodoForm submit={handleSubmit} text={todo.task} isItem={true} />
      )}
    </div>
  );
};

export default memo(TodoItem);
