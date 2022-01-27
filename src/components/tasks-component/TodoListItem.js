import React from 'react';

export const TodoListItem = ({todo, index, handleToggle, handleDelete}) => {
  return (
    <li
      key={ todo.id }
      className="list-group-item"
    > 
      <p 
        className={`${ todo.done && 'completed fst-italic' }`}
        onClick={ () => handleToggle( todo.id ) }
      > {index+1}. { todo.desc } </p>

      <button
        className="btn btn-outline-danger"
        onClick={ () => handleDelete( todo.id ) }
      > Delete </button>
    </li>
  )
};
