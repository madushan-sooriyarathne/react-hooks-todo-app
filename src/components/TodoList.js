import React, { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import TodoItem from "./TodoItem";

import useStyles from "../styles/TodoListStyle";

import empty from "../img/empty.svg";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
  //Context
  const todoList = useContext(TodoContext);

  // Styles
  const classes = useStyles();
  return (
    <div className={classes.TodoList}>
      {todoList.length < 1 ? (
        <div className={classes.TodoList_error}>
          <img src={empty} alt="no todos"></img>
          <p>You don't have any todos</p>
        </div>
      ) : (
        <TransitionGroup className={classes.TodoList_list}>
          {todoList.map((todo) => (
            <CSSTransition timeout={300} key={todo.id} classNames="fade">
              <TodoItem todo={todo} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </div>
  );
};

export default TodoList;
