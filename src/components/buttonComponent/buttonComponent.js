import React from 'react';
import Button from 'react-bootstrap/Button';
import './buttonComponent.css';

const ButtonComponent = ({
  variantValue = 'primary',
  content,
  subContent,
  customStyle,
}) => {
  const variant = customStyle ? '' : variantValue;
  return (
    <Button data-testid="button" bsPrefix={customStyle} variant={variant}>
      { content && <span>{content}</span> }
      { subContent && <span>{subContent}</span> }
    </Button>
  );
};

export default ButtonComponent;
