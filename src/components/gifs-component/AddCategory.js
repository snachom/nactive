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
    <form className="giphy-form" onSubmit={ handleSubmit }>
      {/* <p> { inputValue } </p> */}
      <input 
        className="form-control giphy-input"
        type="text"
        value= { inputValue }
        onChange= { handleInputChange }
      />
    </form>
  )
};


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
