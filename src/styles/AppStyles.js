import { createUseStyles } from "react-jss";

export default createUseStyles({
  "@global": {
    ".fade-enter": {
      opacity: 0,
      transform: "translateY(-1rem)",
    },
    ".fade-enter-active": {
      opacity: 1,
      transform: "translateY(0)",
      transition: "all 0.3s ease-out",
    },
    ".fade-exit": {
      opacity: 1,
      transform: "translateY(0)",
    },
    ".fade-exit-active": {
      opacity: 0,
      transform: "translateY(1rem)",
      transition: "all 0.3s ease-out",
    },
  },
  App: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15275a",
  },
});
