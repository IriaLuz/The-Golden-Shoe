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

  it('should render with content= "Buy Now"', () => {
    const content = 'Buy Now';
    render(<MyButton content={content} />);
    const button = screen.getByTestId('button');
    expect(button).toHaveTextContent(content);
  });

  it('should render with variant="secondary"', () => {
    const variant = 'danger';
    const expectedStyle = 'btn btn-danger';
    render(<MyButton variantValue={variant} />);
    const button = screen.getByTestId('button');
    expect(button).toHaveAttribute('class', expectedStyle);
    expect(button).toBeInTheDocument();
  });

  it('should render with variant="success" and content="click here"', () => {
    const content = 'click here';
    const variant = 'success';
    const expectedStyle = 'btn btn-success';
    render(<MyButton variantValue={variant} content={content} />);
    const button = screen.getByTestId('button');
    expect(button).toHaveTextContent(content);
    expect(button).toHaveAttribute('class', expectedStyle);
    expect(button).toBeInTheDocument();
  });
});
