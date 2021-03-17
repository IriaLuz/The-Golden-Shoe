import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroBanner from './../heroBanner';

describe('should render Hero Banner', () => {
  it('should render headline', () => {
    const expectedContent = 'Up to 50% OFF in your first buy';
    render(<HeroBanner />);
    const headlineElement = screen.getByTestId('headlineOffer');
    expect(headlineElement).toHaveTextContent(expectedContent);
  });

  it('should render "subheadline"', () => {
    const expectedContent = 'Be ready for anything...';
    render(<HeroBanner />);
    const subheadlineElement = screen.getByTestId('subheadlinesentence');
    expect(subheadlineElement).toHaveTextContent(expectedContent);
  });

  it('should render MyButton with variantValue="light" and content="Shop Now""', () => {
    const expectedContent = 'Shop Now';
    const expectedStyle = 'btn btn-light';
    render(<HeroBanner />);
    const button = screen.getByTestId('button');
    expect(button).toHaveTextContent(expectedContent);
    expect(button).toHaveAttribute('class', expectedStyle);
    expect(button).toBeInTheDocument();
  });
});
