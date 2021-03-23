import React from 'react';
import Button from 'react-bootstrap/Button';
import './buttonComponent.css';

const ButtonComponent = ({
  variantValue = 'primary',
  content,
  subContent,
  customStyle,
  onClick,
  disabled,
  type,
  onSubmit
}) => {
  const variant = customStyle ? '' : variantValue;
  return (
    <Button
      disabled={disabled}
      data-testid="button"
      bsPrefix={customStyle}
      variant={variant}
      onClick={onClick}
      type={type}
      onSubmit={onSubmit}
    >
      {content && <span>{content}</span>}
      {subContent && <span>{subContent}</span>}
    </Button>
  );
};

export default ButtonComponent;
