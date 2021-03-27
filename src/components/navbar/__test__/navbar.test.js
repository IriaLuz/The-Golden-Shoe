import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavbarComponent from './../navbar';

describe('should render navbar', () => {
  it('should render Shop link', () => {
    const expectedContent = 'SHOP';
    const expectedLinkValue = '/products';
    render(<NavbarComponent />, { wrapper: MemoryRouter });
    const linkElement = screen.getByTestId('shoplink-navbar');
    expect(linkElement).toHaveAttribute('href', expectedLinkValue);
    expect(linkElement).toHaveTextContent(expectedContent);
  });

  it('should render About link', () => {
    const expectedContent = 'ABOUT';
    const expectedLinkValue = '/about';
    render(<NavbarComponent />, { wrapper: MemoryRouter });
    const linkElement = screen.getByTestId('aboutlink');
    expect(linkElement).toHaveAttribute('href', expectedLinkValue);
    expect(linkElement).toHaveTextContent(expectedContent);
  });

  it('should render logo link', () => {
    const expectedLinkValue = '/';
    render(<NavbarComponent />, { wrapper: MemoryRouter });
    const linkElement = screen.getByTestId('logo-link-navbar');
    expect(linkElement).toHaveAttribute('href', expectedLinkValue);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'logo2.png');
    expect(logo).toHaveAttribute('alt', 'logo');
  });
});
