import React from "react";
import "./ToDoList.css";

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList__item ">
        <p className="TodoList__text">{text}</p>
        <button  className="TodoList__button" onClick={()=>onDeleteTodo(id)}  >Виконано => Видалити</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
 