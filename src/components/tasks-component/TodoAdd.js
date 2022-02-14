import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

  const [ {description}, handleInputChange, reset ] = useForm({
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if( description.trim().length <= 1) {
      return;
    }

    const newTodo = { 
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    handleAddTodo(newTodo);
    reset()
  }

  return (
    <>
      <div className="todo-add-wrapper">
        <h4>Agregar TODO</h4>
        <hr/>

        <form className="todo-app-form" onSubmit={ handleSubmit } >
          <input 
            type="text" 
            name="description"
            className="form-control todo-app-input"
            placeholder="Aprender..."
            autoComplete="off"
            value={ description }
            onChange={ handleInputChange }
          />
          <button 
            type="submit"
            className="btn btn-outline-warning mt-1 btn-block btn-add"
          > Add </button>
        </form>
      </div>
    </>
  )
};
