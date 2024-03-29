import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const FaqAccordion = ({ accordionBtnTitle, accordionBTnBody }) => {
  return (
    <>
      <Accordion>
        <Card>
          <Card.Header className="accordion-card-header">
            <Accordion.Toggle
              as={Button}
              className="btn-accordion"
              variant="link"
              eventKey="0"
            >
              {accordionBtnTitle}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="text-left">{accordionBTnBody}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default FaqAccordion;
