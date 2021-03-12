import React from 'react';
import Button from 'react-bootstrap/Button';
import './button.css';

const MyButton = ({variantValue= 'primary', content, customStyle }) => {
  return <Button data-testid= 'button' bsPrefix={customStyle} variant={variantValue}>{content}</Button>;
};

export default MyButton;
