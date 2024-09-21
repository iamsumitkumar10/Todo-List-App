import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li>
      {todo.task}
      // adding deleteTodo to
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
