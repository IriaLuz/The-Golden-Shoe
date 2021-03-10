import React from 'react';
import Button from 'react-bootstrap/Button';
import './button.css';

const MyButton = ({ variantValue, content, customStyle }) => {
  return <Button bsPrefix={customStyle} variant={variantValue}>{content}</Button>;
};

export default MyButton;
