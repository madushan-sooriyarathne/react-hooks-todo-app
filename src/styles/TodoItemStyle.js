import { createUseStyles } from "react-jss";

export default createUseStyles({
  TodoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: "2rem",
    minHeight: "8rem",
    borderRadius: 3,
  },
  TodoItem_task: {
    fontSize: "1.5rem",
    fontWeight: 500,
  },
  done: {
    textDecoration: "line-through",
    fontStyle: "italic",
  },
  TodoItem_button_set: {
    "& > *:not(:last-child)": {
      marginRight: "1rem",
    },
  },
  TodoItem_btn: {
    width: "1.8rem",
    height: "1.8rem",
    cursor: "pointer",
    transition: "all 0.2s ease-out",

    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  btn_done: {
    fill: "#f69000",
  },
  btn_delete: {
    fill: "#ac2e6a",
  },
  btn_edit: {
    fill: "#10829f",
  },
});
