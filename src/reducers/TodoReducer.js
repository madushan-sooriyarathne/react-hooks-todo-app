import { uuid } from "uuidv4";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { task: action.task, id: uuid(), completed: false }];
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "TOGGLE":
      return state.map((item) =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    case "EDIT":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, task: action.task, completed: false }
          : item
      );
    default:
      return state;
  }
};

export default TodoReducer;
