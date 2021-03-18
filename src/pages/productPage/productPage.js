import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonComponent from '../../components/buttonComponent/buttonComponent';
import CustomAccordion from '../../components/customAccordion/customAccordion';
import CustomModal from '../../components/customModal/customModal';
import image1 from './images/card-1-shoe-model.jpg';
import CustomCarousel from '../../components/customCarousel/customCarousel';
import './productPage.css';

const ProductPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="mr-2">
            <Col>
              <img className="product-img" src={image1} alt="shoe1" />
              {/* <CustomCarousel /> */}
            </Col>
            <Col>
              <CustomCarousel />
            </Col>
          </Col>
          <Col xs={6}>
            <Row>
              <Col className="text-start">
                <h2>Product Name</h2>
              </Col>
            </Row>
            <Row>
              <h3 className="title-button-product">SELECT SIZE:</h3>
            </Row>

            <Row>
              <Col>
                <ButtonComponent
                  customStyle="btn-shoe-size"
                  content="uk"
                  subContent="3"
                />
              </Col>
              <Col>
                <ButtonComponent
                  customStyle="btn-shoe-size"
                  content="uk"
                  subContent="3"
                />
              </Col>
              <Col>
                <ButtonComponent
                  customStyle="btn-shoe-size"
                  content="uk"
                  subContent="3"
                />
              </Col>
              <Col>
                <ButtonComponent
                  customStyle="btn-shoe-size"
                  content="uk"
                  subContent="3"
                />
              </Col>
              <Col>
                <ButtonComponent
                  customStyle="btn-shoe-size"
                  content="uk"
                  subContent="3"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <CustomModal />
              </Col>
            </Row>
            <Row>
              <h3 className="title-button-product">SELECT COLOR:</h3>
            </Row>
            <Row>
              <Col>
                <ButtonComponent customStyle="btn-shoe-color" />
              </Col>
              <Col>
                <ButtonComponent customStyle="btn-shoe-color" />
              </Col>
              <Col>
                <ButtonComponent customStyle="btn-shoe-color" />
              </Col>
              <Col>
                <ButtonComponent customStyle="btn-shoe-color" />
              </Col>
              <Col>
                <ButtonComponent customStyle="btn-shoe-color" />
              </Col>
            </Row>
            <Row>
              <Col>
                <ButtonComponent
                  className="button-cart"
                  customStyle="btn-product"
                  content="ADD TO CART"
                />
              </Col>
            </Row>

            <Col>
              <CustomAccordion
                className="accordion-style"
                accordionBtnTitle="Description"
                accordionBTnBody="Our breathable, silky-smooth sneaker made with responsibly sourced eucalyptus tree fiber treads lightly in everything you do. Made in Reading UK"
                accordionBtnListTitle="Features"
                accordionBtnListItems="Renewable Materials"
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
