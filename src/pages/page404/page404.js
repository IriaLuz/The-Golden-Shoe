import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image from './image/surprised2.png';
import './page404.css';

const NotFound = () => {
  return (
    <Container>
      <Col>
        <h1>ERROR 404</h1>
      </Col>
      <hr id="divider-card-style" />
      <Col>
        <h1>Oops! something went wrong</h1>
      </Col>
      <Row>
        <Col>
          <h2>
            Please Click here <Link to="/">Here</Link> to go to Home Page
          </h2>
        </Col>
      </Row>
      <hr id="divider-card-style" />
      <Col>
        <Image className="content-image404" src={image} alt="not found" />
      </Col>
    </Container>
  );
};

export default NotFound;
