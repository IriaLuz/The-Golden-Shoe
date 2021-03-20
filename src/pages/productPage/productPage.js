import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonComponent from '../../components/buttonComponent/buttonComponent';
import CustomAccordion from '../../components/customAccordion/customAccordion';
import CustomModal from '../../components/customModal/customModal';
import CustomCarousel from '../../components/customCarousel/customCarousel';
import './productPage.css';
import { getShoe } from '../../services/fakeShoeService';

const ProductPage = (props) => {
  const productId = props.match.params.id;

  const productData = getShoe(productId);
  console.log(productData);

  console.log(productId);
  // const [selectedColor, setSelectedColor]= useState(productData.inventory[0]);

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

  const [testVariable, setTestVariable] = useState('te amo');

  const handleAddToCart = () => {
    console.log('antes', testVariable);
    const newTestVariable = `${testVariable} Iria`;
    setTestVariable(newTestVariable);
    console.log('despues ', testVariable);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="mr-2">
            <Col>
              <CustomCarousel images={images} />
            </Col>
          </Col>
          <Col xs={6}>
            <Row>
              <Col className="text-left">
                <h2>{productData.name}</h2>
                <div>£{productData.price}</div>
              </Col>
            </Row>
            <Row>
              <Col className="text-left">
                <h3 className="title-button-product">SELECT SIZE:</h3>
              </Col>
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
              <Col className="text-left">
                <CustomModal />
              </Col>
            </Row>
            <Row>
              <Col className="text-left">
                <h3 className="title-button-product">SELECT COLOR:</h3>
              </Col>
            </Row>
            <Row>
              {productData.inventory.map((shoe) => (
                <Col key={shoe.id} className="flex-grow-0">
                  <ButtonComponent
                    customStyle={`btn-shoe-color shoe-color-${shoe.colorCode}`}
                  />
                </Col>
              ))}
            </Row>
            <Row>
              <Col>
                {/* <Link to="/cart"> */}
                <ButtonComponent
                  className="button-cart"
                  customStyle="btn-product"
                  content="ADD TO CART"
                  onClick={handleAddToCart}
                />
                {/* </Link> */}
              </Col>
            </Row>

            <Col>
              <CustomAccordion
                className="accordion-style"
                accordionBtnTitle="Description"
                accordionBTnBody={productData.summaryDescription}
                accordionBtnListTitle="Features"
                accordionBtnListItems={productData.features}
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
