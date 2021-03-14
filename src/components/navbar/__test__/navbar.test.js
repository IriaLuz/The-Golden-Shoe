import React from 'react';
import { render, screen } from '@testing-library/react';
import NavbarComponent from './../navbar';

describe('should render navbar', () => {
  it('should render Shop link', () => {
    const expectedContent = 'SHOP';
    const expectedLinkValue = '#home';
    render(<NavbarComponent />);
    const linkElement = screen.getByTestId('shoplink');
    expect(linkElement).toHaveAttribute('href', expectedLinkValue);
    expect(linkElement).toHaveTextContent(expectedContent);
  });

  it('should render About link', () => {
    const expectedContent = 'ABOUT';
    const expectedLinkValue = '#home';
    render(<NavbarComponent />);
    const linkElement = screen.getByTestId('aboutlink');
    expect(linkElement).toHaveAttribute('href', expectedLinkValue);
    expect(linkElement).toHaveTextContent(expectedContent);
  });

  it('should render logo link', () => {
    const expectedLinkValue = '#home';
    render(<NavbarComponent />);
    const linkElement = screen.getByTestId('logo');
    expect(linkElement).toHaveAttribute('href', expectedLinkValue);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'logo2.png');
    expect(logo).toHaveAttribute('alt', 'logo');
  });
});
