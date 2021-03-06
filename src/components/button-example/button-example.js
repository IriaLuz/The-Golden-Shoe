import React from 'react';
import './button-example.css';

const Button = ({label}) => {
    return <div data-testid="button" className='button-style'>hi {label}</div>
}
 
export default Button;