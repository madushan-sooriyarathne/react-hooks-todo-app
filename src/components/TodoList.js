import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import TodoItem from "./TodoItem";

import useStyles from "../styles/TodoListStyle";

import empty from "../img/empty.svg";

const TodoList = ({ todoList, deleteTodo, updateTodo }) => {
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
              <TodoItem
                todo={todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </div>
  );
};

export default TodoList;
