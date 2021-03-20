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
  const [selectedShoe, setSelectedShoe] = useState(productData.inventory[0]);
  const [selectedSize, setSelectedSize] = useState({});

  const handleSelectedSize = (newSize) => {
    const newSizeSelected = newSize.size === selectedSize.size ? {} : newSize;
    setSelectedSize(newSizeSelected);
    console.log(newSizeSelected);
  };

  const handleColorSelection = (selectedShoeId) => {
    const newSelectedShoe = productData.inventory.find(
      (shoeColor) => shoeColor.id === selectedShoeId,
    );
    setSelectedShoe(newSelectedShoe);
  };

  const handleAddToCart = () => {
    console.log('item added to cart');
  };

  const addToCartMessage =
    selectedSize.stock === 0
      ? 'SIZE SOLD OUT'
      : `ADD TO CART - £${productData.price}`;
  return (
    <>
      <Container>
        <Row>
          <Col className="mr-2">
            <Col>
              <CustomCarousel images={selectedShoe.images} />
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
                <h3 className="title-button-product">SELECT COLOR:</h3>
              </Col>
            </Row>
            <Row>
              {productData.inventory.map((shoe) => (
                <Col key={shoe.id} className="flex-grow-0">
                  <ButtonComponent
                    customStyle={`btn-shoe-color shoe-color-${shoe.colorCode}`}
                    onClick={() => handleColorSelection(shoe.id)}
                  />
                </Col>
              ))}
            </Row>
            <Row>
              <Col className="text-left">
                <h3 className="title-button-product">SELECT SIZE:</h3>
              </Col>
            </Row>

            <Row>
              {selectedShoe.sizes.map((size) => (
                <Col className="flex-grow-0">
                  <ButtonComponent
                    customStyle={
                      size.stock === 0
                        ? 'btn-shoe-size btn-shoe-size-no-stock'
                        : 'btn-shoe-size'
                    }
                    content={size.format}
                    subContent={size.size}
                    onClick={() => handleSelectedSize(size)}
                  />
                </Col>
              ))}
            </Row>
            <Row>
              <Col className="text-left">
                <CustomModal />
              </Col>
            </Row>

            <Row>
              <Col>
                {/* <Link to="/cart"> */}
                <ButtonComponent
                  className="button-cart"
                  customStyle="btn-product"
                  content={selectedSize.size ? addToCartMessage : 'SELECT SIZE'}
                  onClick={handleAddToCart}
                />
                {/* </Link> */}
              </Col>
            </Row>

            <Col className="p-0">
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
