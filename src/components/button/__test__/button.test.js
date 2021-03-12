import React from 'react';
import { render, screen } from '@testing-library/react';
import MyButton from '../button';

describe('MyButton render', () => {
  it('should render with default props', () => {
    const defaultStyle = 'btn btn-primary';
    render(<MyButton />);
    const button = screen.getByTestId('button');
    expect(button).toHaveAttribute('class', defaultStyle);
    expect(button).toBeInTheDocument();
  });
});
