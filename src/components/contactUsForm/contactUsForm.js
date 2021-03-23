import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import CartModal from '../cartModal/cartModal';
import ButtonComponent from '../buttonComponent/buttonComponent';

const ContactUsForm = () => {
  const [modalShow, setModalShow] = useState(false);
  const [userRequest, setUserRequest] = useState({ email: '', question: '' });

  const handleChange = ({ currentTarget: { value } }) => {
    setUserRequest(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalShow(true);
  };
  return (
    <Container>
      <Row>
        <Col className="text-left">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Enter email</Form.Label>
              <Form.Control
                required
                onChange={handleChange}
                type="email"
                placeholder="name@example.com"
                value={userRequest.email}
              />
            </Form.Group>

            <Form.Group controlId="question">
              <Form.Label>What can we help you with?</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                onChange={handleChange}
                type="string"
                value={userRequest.question}
                placeholder="Please add you request"
              />
            </Form.Group>
            <ButtonComponent
              variantValue="secondary"
              content="Submit"
              type="submit"
              //   disabled={!userRequest.email || !userRequest.question}
            />
            <CartModal
              title="Thank you"
              content="We will back to you soon!"
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsForm;
