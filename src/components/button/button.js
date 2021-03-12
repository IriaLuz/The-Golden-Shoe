import React from 'react';
import Button from 'react-bootstrap/Button';

const MyButton = ({variantValue= 'primary', content }) => {
  return <Button data-testid= 'button' variant={variantValue}>{content}</Button>;
};

export default MyButton;
