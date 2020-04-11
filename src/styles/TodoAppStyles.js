import { createUseStyles } from "react-jss";

export default createUseStyles({
  TodoApp: {
    width: "50rem",
    height: "60rem",
    backgroundColor: "#e2e4e6",
    borderRadius: 5,
    padding: "2rem",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    "@media only screen and (max-width: 25em)": {
      width: "100%",
      height: "100%",
      borderRadius: 0,
    },
  },

  TodoApp_title: {
    fontSize: "5rem",
    fontWeight: 700,
    textTransform: "uppercase",
  },
});
