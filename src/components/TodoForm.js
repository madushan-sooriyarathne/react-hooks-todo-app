import React from "react";

import useInputState from "../hooks/useInputState";

import useStyles from "../styles/TodoFormStyle";

const TodoForm = ({ submit, text = "", isItem = false }) => {
  const [value, updateValue, resetValue] = useInputState(text);

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    resetValue();
    submit(value);
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
