import React from "react";
import TodoApp from "./layout/TodoApp";

import useStyles from "./styles/AppStyles";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <TodoApp />
    </div>
  );
};

export default App;
