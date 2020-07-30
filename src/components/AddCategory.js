import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    let [inputValue, setinputValue] = useState('trending');

    const inputChange = (e)=> {
        setinputValue( e.target.value );
    }
    const SendSubmit = (e)=>{
        e.preventDefault(); // Esto previene el refrescamiento de la página
        // console.log('Hecho')
        
        if ( inputValue.trim().length > 0 ) {
            setCategories( categories => [inputValue]);
            setinputValue('');
        }
    }
    
    return (
        <form onSubmit={ SendSubmit }>  
            <h3>Mostrando gifs: { inputValue }</h3>
            <input 
                type="text"
                // value={ inputValue } Por si quiero mostrar algo por defecto
                onChange={ inputChange }
                placeholder="Busca aquí"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}