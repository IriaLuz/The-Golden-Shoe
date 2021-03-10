import React from 'react';
import Button from 'react-bootstrap/Button';

const MyButton = ({ variantValue, content }) => {
  return <Button variant={variantValue}>{content}</Button>;
};

export default MyButton;
