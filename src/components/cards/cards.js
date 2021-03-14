import React from 'react';
import { CardDeck } from 'react-bootstrap';
import Image1 from './images/card-1-shoe-model.jpg';
import Image2 from './images/card-2-shoe-model.jpg';
import Image3 from './images/card-3-shoe-model.jpg';
import ProductCard from '../card/card';
import './cards.css';

const ProductCards = () => {
  return (
    <>
      <h1 className="color-text" id="text-style">
        Some Of Our Favorites
      </h1>
      <hr id="divider-style" />
      <CardDeck>
        <ProductCard
          image={Image1}
          title="Pro Leather"
          textStyling="color-text"
          cardBody="This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer."
          buttonStyling="btn-gold"
          buttonLabel="Shop Now"
          cardFooterText="Long-lasting cushioning"
        />
        <ProductCard
          image={Image2}
          title="Safety Boots"
          textStyling="color-text"
          cardBody="This card has supporting text below as a natural lead-in to
        additional content."
          buttonStyling="btn-gold"
          buttonLabel="Shop Now"
          cardFooterText="Strong and light"
        />
        <ProductCard
          image={Image3}
          title="Tree Dasher"
          textStyling="color-text"
          cardBody="This is a wider card with supporting text below as a natural lead-in
        to additional content. This card has even longer content than the
        first to show that equal height action."
          buttonStyling="btn-gold"
          buttonLabel="Shop Now"
          cardFooterText="Breezy Sneaker"
        />
      </CardDeck>
    </>
  );
};

export default ProductCards;
