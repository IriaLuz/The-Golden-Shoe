import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './aboutPage.css';

const AboutPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About Us</h1>
          <hr id="about-divider" />
          <p className="about-text-style">
            ABOUT US Founded in 1992 by Gillian and Dennis Macfarlane, Up &
            Running remains a family business with Gill and Dennis firmly at the
            helm of operations. The business started from a love of running,
            with the aim to serve the local running communities with the latest
            products and the best customer service possible. This ethos still
            stands and applies equally to the online arm of the business.{' '}
          </p>
          <p className="about-text-style">
            As a running specialist, selling men’s and women’s running shoes,
            junior running shoes, technical running clothing and running
            accessories, as well as the most popular running electronics, all
            the products are selected by runners for runners. The same products
            are available to buy online with our friendly online team available
            to help when needed.
          </p>
          <p className="about-text-style">
            We are proud of our success at the National Running Awards in 2018,
            2019 and 2020, getting on the podium in all three categories: Best
            Customer Service, Best National Retailer and Best Online Retailer,
            with gold awards for Customer Service and Best National Retailer.
          </p>
          <p className="about-text-style">
            As an independent business we are always driven to be the best and
            provide exceptional service to all our customers and our running
            communities, whether that is selling running shoes online, giving
            advice or explaining the latest technology in store.
          </p>
          <p className="about-text-style">
            We have been fortunate to be able to engage with many of our
            customers through our presence at The National Running Show as the
            show’s premium retail partner since its inception in 2018.
          </p>
          <p className="about-text-style">
            Our running heritage is firmly at the heart of our business and our
            reputation within the running industry continues to grow and evolve.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
