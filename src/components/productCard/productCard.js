import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ButtonComponent from '../buttonComponent/buttonComponent';

const ProductCard = ({
  image,
  title,
  textStyling,
  cardBody,
  buttonStyling,
  buttonLabel,
  cardFooterText,
  buttonLink = '/not-found',
}) => {
  return (
    <Card>
      <Link to={buttonLink} data-testid="card-link">
        <Card.Img data-testid="cardImg" variant="top" src={image} />
      </Link>
      <Card.Body>
        <Card.Title data-testid="card-title"> {title}</Card.Title>
        <Card.Text data-testid="text-card" bsPrefix={textStyling}>
          {cardBody}
        </Card.Text>
      </Card.Body>
      <Link to={buttonLink}>
        <ButtonComponent customStyle={buttonStyling} content={buttonLabel} />
      </Link>
      <Card.Footer>
        <small data-testid="card-footer" className="text-muted">
          {cardFooterText}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
