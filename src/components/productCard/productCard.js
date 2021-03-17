import React from 'react';
import { Card } from 'react-bootstrap';
import ButtonComponent from '../buttonComponent/buttonComponent';

const ProductCard = ({
  image,
  title,
  textStyling,
  cardBody,
  buttonStyling,
  buttonLabel,
  cardFooterText,
}) => {
  return (
    <Card>
      <Card.Img data-testid="cardImg" variant="top" src={image} />
      <Card.Body>
        <Card.Title data-testid="card-title"> {title}</Card.Title>
        <Card.Text data-testid="text-card" bsPrefix={textStyling}>
          {cardBody}
        </Card.Text>
      </Card.Body>
      <ButtonComponent customStyle={buttonStyling} content={buttonLabel} />
      <Card.Footer>
        <small data-testid="card-footer" className="text-muted">
          {cardFooterText}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
