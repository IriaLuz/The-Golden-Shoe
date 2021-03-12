import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import Image1 from './images/card-1-shoe-model.jpg';
import Image2 from './images/card-2-shoe-model.jpg';
import Image3 from './images/card-3-shoe-model.jpg';
import MyButton from '../button/button';
import './card.css';

const MyCard = () => {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title> Pro Leather</Card.Title>
          <Card.Text bsPrefix="color-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <MyButton customStyle="btn-gold" content="Shop Now" />
        <Card.Footer>
          <small className="text-muted">Long-lasting cushioning</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image2} />
        <Card.Body>
          <Card.Title>Safety Boots</Card.Title>
          <Card.Text bsPrefix="color-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
        <MyButton customStyle="btn-gold" content="Shop Now" />
        <Card.Footer>
          <small className="text-muted">Strong and light</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image3} />
        <Card.Body>
          <Card.Title>Tree Dasher</Card.Title>
          <Card.Text bsPrefix="color-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <MyButton customStyle="btn-gold" content="Shop Now" />
        <Card.Footer>
          <small className="text-muted">Breezy Sneaker</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default MyCard;
