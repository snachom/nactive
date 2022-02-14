import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import './styles.css'
import './iphone.css'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos])

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }

  const handleDelete = ( todoId ) => {
    dispatch({
      type: 'delete',
      payload: todoId
    })
  }

  const handleToggle = ( todoId ) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();  

  return (
    <div className="container-fluid todo-app-wrapper">
      <div className="row resp-row">
        <div className="col-7 col-tasks">
          <div className="tasks-wrapper">
            <h2 className="todo-title">TodoApp <small>({ todos.length })</small></h2>
            <TodoList 
              todos={todos}
              handleDelete={ handleDelete }
              handleToggle={ handleToggle }
            />
          </div>
        </div>
        <div className="col-5 col-input">
          <div className="iphone-border">
            <span className="top left">
              <span className="ringer"></span>
              <span className="volume up"></span>
              <span className="volume down"></span>
            </span>
            <span className="top right">
              <span className="power"></span>
            </span>
            <span className="bottom left"></span>
            <span className="bottom right"></span>           
            <div className="iphone">	
              <span className="speaker"></span>
              <div className="screen">
                <div className="home">
              
                  <div className="top-bar">
                    <span className="signal">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                    <span className="wifi"><hr /></span>
                    <span className="time">{time}</span>
                    <span className="battery">100%</span>
                  </div>
                  
                  <div className="nav-bar">
                    <span>&#9679;</span>
                    <span>&#9679;</span>
                  </div>
                  <TodoAdd
                    handleAddTodo={ handleAddTodo }
                  />
                  <div className="footer-bar icons">
                    <a href='/nactive' className="icon phone" alt="Phone">
                      <span></span>
                    </a>
                    <a href='/nactive' className="icon mail" alt="Mail">
                      <div className="envelope">
                        <span className="flap"></span>
                      </div>
                    </a>
                    <a href='/nactive' className="icon safari" alt="Safari">
                      <div className="compass">
                        <div className="degrees">
                          <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
                          <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
                          <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
                          <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
                        </div>
                      </div>
                    </a>
                    <a href='/nactive' className="icon music" alt="Music">
                      <div className="note">
                        <span className="arm"></span>
                        <span className="arm"></span>
                      </div>
                    </a>
                  </div>        
                </div>
                </div>
                <a href='/nactive' className="home" alt='home'><span></span></a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
};
