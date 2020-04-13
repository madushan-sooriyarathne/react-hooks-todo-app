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
    padding: "1rem",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "50%",
    outline: "none",
    cursor: "pointer",

    "&::after": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "gray",
      borderRadius: "50%",
      transform: "scale(0)",
      transformOrigin: "50% 50%",
      transition: "all 0.4s ease-in",
    },
    "&:hover:after": {
      transform: "scale(2)",
      opacity: "0.2",
    },

    "& svg": {
      width: "1.8rem",
      height: "1.8rem",

      transition: "all 0.2s ease-out",
    },

    "&:hover svg": {
      transform: "scale(1.2)",
    },
  },
  btn_done: {
    "& svg": {
      fill: "#f69000",
    },
  },
  btn_delete: {
    "& svg": {
      fill: "#ac2e6a",
    },
  },
  btn_edit: {
    "& svg": {
      fill: "#10829f",
    },
  },
});
