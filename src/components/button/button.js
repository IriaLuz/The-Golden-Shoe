import React from 'react';
import Button from 'react-bootstrap/Button';
import './button.css';

const ButtonComponent = ({
  variantValue = 'primary',
  content,
  customStyle
}) => {
  const variant = customStyle ? '' : variantValue;
  return <Button data-testid='button' bsPrefix={customStyle} variant={variant}>{content}</Button>;
};

export default ButtonComponent;