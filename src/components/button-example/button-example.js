import React from 'react';
import './button-example.css';
import PropTypes from 'prop-types';

const Button = ({ label }) => {
  return (
    <div data-testid="button" className="button-style">
      hi {label}
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
};

Button.defaultProps = {
  label: ""
};

export default Button;
