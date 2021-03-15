import React from 'react';
import CustomButton from 'react-bootstrap/Button';
import './buttonComponent.css';

const ButtonComponent = ({
  variantValue = 'primary',
  content,
  customStyle,
}) => {
  const variant = customStyle ? '' : variantValue;
  return (
    <CustomButton data-testid="button" bsPrefix={customStyle} variant={variant}>
      {content}
    </CustomButton>
  );
};

export default ButtonComponent;
