import { createUseStyles } from "react-jss";

export default createUseStyles({
  "@global": {
    //Scrollbar Styles
    "::-webkit-scrollbar": {
      width: "5px",
      margin: "0 5px",
    },
    "::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px grey",
      backgroundColor: "#8d9d9e",
      borderRadius: "3px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "#2e4257",
      borderRadius: "4px",
    },
  },
  TodoList: {
    height: "100%",
    alignSelf: "stretch",
    marginBottom: "2rem",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  TodoList_error: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "& img": {
      width: "10rem",
      height: "10rem",
    },

    "& p": {
      fontSize: "1.8rem",
      fontWeight: 500,
      color: "red",
    },
  },
  TodoList_list: {
    height: "100%",
    width: "100%",
    overflow: "auto",
    overflowY: "scroll",
    "& > *:not(:last-child)": {
      marginBottom: "1rem",
    },
  },
});
