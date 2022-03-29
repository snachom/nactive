import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './add-category.css';


export const AddCategory = ( {setCategories} ) => {

  const [ inputValue, setInputValue ] = useState('')

  const handleInputChange = (e) => {
    setInputValue( e.target.value )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if( inputValue.trim().length > 2 ){
      setCategories( cats => [inputValue, ...cats])
      setInputValue('')
    }
  }

  return (
    <div className="container">
      <form className="giphy-form" onSubmit={ handleSubmit }>
        {/* <p> { inputValue } </p> */}
        <input 
          className="form-control giphy-input"
          type="text"
          placeholder="Search your gif here"
          value= { inputValue }
          onChange= { handleInputChange }
        />
      </form>
    </div>
  )
};


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
