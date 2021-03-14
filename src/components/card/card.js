import React from 'react';
import {Card} from 'react-bootstrap';
import ButtonComponent from '../button/button';

const ProductCard = ({image,title,textStyling,cardBody, buttonStyling, buttonLabel, cardFooterText}) => {
    return ( 
        <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title> {title}</Card.Title>
          <Card.Text bsPrefix={textStyling}>
            {cardBody}
          </Card.Text>
        </Card.Body>
        <ButtonComponent customStyle={buttonStyling} content={buttonLabel} />
        <Card.Footer>
          <small className="text-muted">{cardFooterText}</small>
        </Card.Footer>
      </Card>
    );
};
 
export default ProductCard;