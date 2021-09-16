import { useState } from "react";

const useArray = () => {
  const [todoList, setTodoList] = useState([]);

  const newTodoTask = (newTask) => {
    setTodoList([...todoList, newTask]);
  }

  return [todoList, newTodoTask];
};

export default useArray;
