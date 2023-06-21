import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
      <div className="content">
        <p>{todo.text}</p>
        <p className='category'>({todo.category})</p>
    </div>
    <div>
        <button className='check' onClick={() => completeTodo(todo.id)}><i class='bx bx-check' ></i></button>
        <button className='remove' onClick={() => removeTodo(todo.id)}><i class='bx bx-x' ></i></button>
      </div>
    </div>
  );
};

export default Todo