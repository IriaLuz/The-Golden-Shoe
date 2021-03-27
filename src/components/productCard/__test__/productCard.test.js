import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from '../productCard';

describe('should render ProductCard', () => {
  it('should render product image with src ="./images/card-3-shoe-model.jpg"', () => {
    const expectedImage = './images/card-3-shoe-model.jpg';
    render(<ProductCard image={expectedImage} />, { wrapper: MemoryRouter });
    const cardImageElement = screen.getByTestId('cardImg');
    expect(cardImageElement).toHaveAttribute('src', expectedImage);
  });

  it('should render card title with title="Tree Dasher"', () => {
    const expectedText = 'Tree Dasher';
    render(<ProductCard title={expectedText} />, { wrapper: MemoryRouter });
    const cardTitleElement = screen.getByTestId('card-title');
    expect(cardTitleElement).toHaveTextContent('Tree Dasher');
  });

  it('should render card textStyle with textStyling="color-text"', () => {
    const expectedStyle = 'color-text';
    render(<ProductCard textStyling={expectedStyle} />, {
      wrapper: MemoryRouter,
    });
    const cardStyleElement = screen.getByTestId('text-card');
    expect(cardStyleElement).toHaveAttribute('class', expectedStyle);
  });

  it('should render card text body with cardBody="Text example"', () => {
    const expectedText = 'Text example';
    render(<ProductCard cardBody={expectedText} />, { wrapper: MemoryRouter });
    const cardTextBodyElement = screen.getByTestId('text-card');
    expect(cardTextBodyElement).toHaveTextContent(expectedText);
  });

  it('should render card button with buttonStyling="btn-gold"', () => {
    const expectedStyle = 'btn-gold';
    render(<ProductCard buttonStyling={expectedStyle} />, {
      wrapper: MemoryRouter,
    });
    const cardButtonStyleElement = screen.getByTestId('button');
    expect(cardButtonStyleElement).toHaveAttribute('class', expectedStyle);
  });

  it('should render card button with buttonLabel="Shop Now"', () => {
    const expectedText = 'Shop Now';
    render(<ProductCard buttonLabel={expectedText} />, {
      wrapper: MemoryRouter,
    });
    const cardButtonLabelElement = screen.getByTestId('button');
    expect(cardButtonLabelElement).toHaveTextContent(expectedText);
  });

  it('should render card text body with cardFooterText="Text example"', () => {
    const expectedText = 'Text example';
    render(<ProductCard cardFooterText={expectedText} />, {
      wrapper: MemoryRouter,
    });
    const cardFooterTextElement = screen.getByTestId('card-footer');
    expect(cardFooterTextElement).toHaveTextContent(expectedText);
  });

  it('should render cardProduct with all the atributtes ', () => {
    const expectedImage = './images/card-3-shoe-model.jpg';
    const expectedTextTitle = 'Test title';
    const expectedTextStyle = 'color-text';
    const expectedTextCardBody = 'Test Card Body';
    const expectedButtonStyle = 'btn-gold';
    const expectedTextButtonLabel = 'Test Button Label';
    const expectedTextCardFooter = 'Test Card Footer';
    const expectedButtonLink = '/test';
    render(
      <ProductCard
        image={expectedImage}
        title={expectedTextTitle}
        textStyling={expectedTextStyle}
        cardBody={expectedTextCardBody}
        buttonStyling={expectedButtonStyle}
        buttonLabel={expectedTextButtonLabel}
        cardFooterText={expectedTextCardFooter}
        buttonLink={expectedButtonLink}
      />,
      { wrapper: MemoryRouter },
    );
    const cardImageElement = screen.getByTestId('cardImg');
    expect(cardImageElement).toHaveAttribute('src', expectedImage);
    const cardTitleElement = screen.getByTestId('card-title');
    expect(cardTitleElement).toHaveTextContent(expectedTextTitle);
    const cardStyleElement = screen.getByTestId('text-card');
    expect(cardStyleElement).toHaveAttribute('class', expectedTextStyle);
    const cardTextBodyElement = screen.getByTestId('text-card');
    expect(cardTextBodyElement).toHaveTextContent(expectedTextCardBody);
    const cardButtonStyleElement = screen.getByTestId('button');
    expect(cardButtonStyleElement).toHaveAttribute(
      'class',
      expectedButtonStyle,
    );
    const cardButtonLabelElement = screen.getByTestId('button');
    expect(cardButtonLabelElement).toHaveTextContent(expectedTextButtonLabel);
    const cardFooterTextElement = screen.getByTestId('card-footer');
    expect(cardFooterTextElement).toHaveTextContent(expectedTextCardFooter);
    const cardLinkElement = screen.getByTestId('card-link');
    expect(cardLinkElement).toHaveAttribute('href', expectedButtonLink);
  });
});
