import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategorie = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cats =>[inputValue,...cats])
            setInputValue('');
        }
       
        console.log("submit hecho")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
    )
}

AddCategorie.propTypes={
    setCategories : PropTypes.func.isRequired
}
