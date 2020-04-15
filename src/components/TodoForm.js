import React, { useContext } from "react";

import useInputState from "../hooks/useInputState";

import useStyles from "../styles/TodoFormStyle";
import { DispatchContext } from "../contexts/TodoContext";

const TodoForm = ({ submit, text = "", isItem = false }) => {
  // Context
  const dispatch = useContext(DispatchContext);

  // Styles
  const classes = useStyles();

  //State
  const [value, updateValue, resetValue] = useInputState(text);

  const handleSubmit = (event) => {
    event.preventDefault();
    resetValue();

    // If rendered from a todoItem run the passed function passed via props on submit
    // otherwise run the dispatcher function from the context
    if (isItem) {
      submit(value);
    } else {
      dispatch({ type: "ADD", task: value });
    }
  };
  return (
    <div className={classes.TodoForm}>
      <form onSubmit={handleSubmit} className={classes.TodoForm_form}>
        <input
          id="task-field"
          value={value}
          onChange={updateValue}
          placeholder="Task"
          autoComplete="off"
          className={classes.TodoForm_input}
          required
        ></input>
        <button type="submit" className={classes.TodoForm_submit}>
          {isItem ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
