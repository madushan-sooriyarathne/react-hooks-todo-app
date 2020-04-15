import React, { createContext } from "react";
import TodoReducer from "../reducers/TodoReducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";

export const TodoContext = createContext();
export const DispatchContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, dispatch] = useLocalStorageReducer(TodoReducer, [], "todos");

  return (
    <TodoContext.Provider value={todoList}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
};
