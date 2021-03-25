import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactUsForm from '../../components/contactUsForm/contactUsForm';
import './contactUsPage.css';

const ContactUsPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>How Can We Help?</h1>
          <hr id="contact-us-divider" />
          <ContactUsForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsPage;
