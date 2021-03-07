import React from 'react';
import './example-component.css';

const ComponentExampleButton = ({ label }) => {
  return (
    <div data-testid="button" className="button-style">
      hi {label}
    </div>
  );
};

export default ComponentExampleButton;
