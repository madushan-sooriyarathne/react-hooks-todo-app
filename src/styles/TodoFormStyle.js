import { createUseStyles } from "react-jss";

export default createUseStyles({
  TodoForm: {
    width: "100%",
  },
  TodoForm_form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  TodoForm_input: {
    width: "100%",
    fontSize: "1.5rem",
    padding: "0.8rem 1rem",
    border: "2px solid black",
    borderRadius: 3,
    transition: "all 0.2s ease-out",
    outline: "none",

    "&:focus": {
      border: "2px solid green",
    },
  },
  TodoForm_submit: {
    fontSize: "1.5rem",
    padding: "0.8rem 1rem",
    border: "2px solid black",
    borderRadius: 3,
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    marginLeft: "1rem",

    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
});
