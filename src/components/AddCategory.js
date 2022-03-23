import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

   const [inputValue, setinputValue] = useState('');
   
   const handleInputChange = (e) => {
      setinputValue( e.target.value )
   };

   const handleSumit = (e) => {
      e.preventDefault();

      if( inputValue.trim().length > 0 ){
         setCategories( _categories => [inputValue, ..._categories] );
         setinputValue('');
      }
   }

  return (
     <form onSubmit={ handleSumit }>
        <input
           type="text"
           value={ inputValue }
           onChange={ handleInputChange }
        />
     </form>
  )
}

AddCategory.protoTypes = {
   setCategories: PropTypes.func.isRequired
}