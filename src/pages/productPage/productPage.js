import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonComponent from '../../components/buttonComponent/buttonComponent';
import CustomAccordion from '../../components/customAccordion/customAccordion';
import CustomModal from '../../components/customModal/customModal';
// import image1 from './images/card-1-shoe-model.jpg';
import CustomCarousel from '../../components/customCarousel/customCarousel';
import './productPage.css';

const ProductPage = (props) => {
const productId = props.match.params.id;

  console.log(productId);
  const images = [
    {
      src:
        'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/TD1MECL080_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHER_ECLIPSE_BLACK_d1f73107-6102-48b9-9a61-56664e9418f7.png?v=1601053802',
      alt: 'black shoe',
    },
    {
      src:
        'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Mens_TR-PDP_Image_6a1b9edc-9926-4719-9d05-93c50cc64dfe.jpg?v=1614723172',
      alt: 'person with shoes',
    },
    {
      src:
        'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageLeft_052bf309-4064-450f-af51-bd9f3399ceb5.png?v=1614723172',
      alt: 'shoe on the side',
    },
  ];

  return (
    <>
      <Container>
        <Row>
          <Col className="mr-2">
            {/* <Col>
              <img className="product-img" src={image1} alt="shoe1" />
            </Col> */}
            <Col>
              <CustomCarousel images={images} />
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
