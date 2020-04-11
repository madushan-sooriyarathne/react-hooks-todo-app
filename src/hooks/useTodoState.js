import { useState } from "react";
import { uuid } from "uuidv4";

const useTodoState = (initialValue = []) => {
  const [todoList, setTodoList] = useState(initialValue);

  const addNewTodo = (task) => {
    setTodoList([...todoList, { task: task, id: uuid(), completed: false }]);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return updatedTodo;
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  return [todoList, updateTodo, addNewTodo, removeTodo];
};

export default useTodoState;
