import React, { useState } from "react";
import useArray from "./hooks/useArray";

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todoList, newTodoTask] = useArray();

  const handleInput = ({ target }) => {
    setInputText(target.value);
  }

  return (
    <>
    {console.log(todoList)}
    <ul>
      {todoList
      && todoList.map((item, id) => (
        <li key={id}>{item}</li>
      ))}
    </ul>
    <input type="text" value={ inputText } onChange={ handleInput } />
    <button type="button" onClick={ () => { newTodoTask(inputText); setInputText('') } }>New task</button>
    </>
  );
}

export default App;
