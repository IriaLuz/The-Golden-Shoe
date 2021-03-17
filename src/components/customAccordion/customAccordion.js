import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const CustomAccordion = ({
  accordionBtnTitle,
  accordionBTnBody,
  accordionBtnListTitle,
  accordionBtnListItems,
}) => {
  return (
    <div>
      <Accordion >
        <Card >
          <Card.Header bsPrefix='card'  >
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              {accordionBtnTitle}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{accordionBTnBody}</Card.Body>
          </Accordion.Collapse>
        </Card >
        <Card> 
          <Card.Header bsPrefix='card' >
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              {accordionBtnListTitle}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>{accordionBtnListItems}</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default CustomAccordion;
