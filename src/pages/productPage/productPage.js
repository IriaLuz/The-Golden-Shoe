import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonComponent from '../../components/buttonComponent/buttonComponent';
import CustomAccordion from '../../components/customAccordion/customAccordion';
import CustomModal from '../../components/customModal/customModal';
import CustomCarousel from '../../components/customCarousel/customCarousel';
import CartModal from '../../components/cartModal/cartModal';
import './productPage.css';
import { getShoe } from '../../services/shoeService';

const alerts = {
  'alert-success': 'Promo Code Applied Successfully',
  'alert-danger': 'Invalid Promo Code',
};

const availableDiscounts = [
  { promoCode: 'AND20', discount: 0.2 },
  { promoCode: 'AND35', discount: 0.35 },
  { promoCode: 'AND50', discount: 0.5 },
];

const ProductPage = (props) => {
  const productId = props.match.params.id;
  const [productData, setProductData] = useState({});
  if (!productData) window.location = '/not-found';
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState({});
  const [finalPrice, setFinalPrice] = useState();
  const [promoCode, setPromoCode] = useState();
  const [promoCodeAlert, setPromoCodeAlert] = useState();
  const [modalShow, setModalShow] = useState(false);

  const initPage = async () => {
    const { data: productDataResponse } = await getShoe(productId);

    setProductData(productDataResponse);
    setFinalPrice(productDataResponse.price);
    setSelectedColor(productDataResponse.inventory[0]);
  };

  useEffect(() => {
    initPage();
  }, []);

  const handleSelectedSize = (newSize) => {
    const newSizeSelected = newSize.size === selectedSize.size ? {} : newSize;
    setSelectedSize(newSizeSelected);
    // console.log(newSizeSelected);
  };

  const handleColorSelection = (selectedShoeId) => {
    const newSelectedColor = productData.inventory.find(
      (shoeColor) => shoeColor.id === selectedShoeId,
    );
    setSelectedColor(newSelectedColor);
  };

  const handleAddToCart = () => {
    setModalShow(true);
  };

  const handleApplyPromoCode = (appliedCode) => {
    const newSelectedDiscount = availableDiscounts.find(
      (discount) => discount.promoCode === appliedCode,
    ) || { discount: 0 };

    setPromoCodeAlert(
      newSelectedDiscount.discount > 0 ? 'alert-success' : 'alert-danger',
    );
    const discountedPrice =
      productData.price * (1 - newSelectedDiscount.discount);
    setFinalPrice(discountedPrice);
  };

  const handlePromoCodeChange = ({ currentTarget: { value } }) => {
    setPromoCode(value);
  };

  const buttonCartStyle = selectedSize.size
    ? 'btn-product btn-product-selected-size'
    : 'btn-product btn-product-unselected-size';

  return (
    <>
      {selectedColor && (
        <Container>
          <Row className="content">
            <Col className="mr-2">
              <Col>
                <CustomCarousel images={selectedColor.images} />
              </Col>
            </Col>
            <Col md={6}>
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
                {selectedColor.sizes.map((size) => {
                  let shoeSizeStyle =
                    size.size === selectedSize.size
                      ? 'btn-shoe-size-selected btn-shoe-size'
                      : 'btn-shoe-size';

                  shoeSizeStyle =
                    size.stock === 0
                      ? 'btn-shoe-size btn-shoe-size-no-stock'
                      : shoeSizeStyle;
                  return (
                    <Col className="flex-grow-0">
                      <ButtonComponent
                        customStyle={shoeSizeStyle}
                        content={size.format}
                        subContent={size.size}
                        onClick={() => handleSelectedSize(size)}
                        disabled={size.stock === 0}
                      />
                    </Col>
                  );
                })}
              </Row>
              <Row>
                <Col className="text-left">
                  <CustomModal />
                </Col>
              </Row>
              <Row>
                <Col className="text-left">
                  <Row>
                    <Col className="text-left">
                      <span>Promo Code </span>
                      <span className="font-italic">(try using AND20)</span>
                    </Col>
                  </Row>
                  <Form inline>
                    <Form.Group controlId="promoCode">
                      <Form.Control
                        type="string"
                        value={promoCode}
                        onChange={handlePromoCodeChange}
                        placeholder="Enter Promo Code"
                      />
                    </Form.Group>
                    <ButtonComponent
                      disabled={!promoCode}
                      variantValue="dark"
                      content="Apply"
                      onClick={() => handleApplyPromoCode(promoCode)}
                    />
                  </Form>
                </Col>
              </Row>
              {promoCodeAlert && (
                <div className={`alert ${promoCodeAlert}`} role="alert">
                  {alerts[promoCodeAlert]}
                </div>
              )}
              <Row>
                <Col>
                  <ButtonComponent
                    className="button-cart"
                    customStyle={
                      selectedSize.stock === 0
                        ? 'btn-product btn-product-no-stock'
                        : buttonCartStyle
                    }
                    content={
                      selectedSize.size
                        ? `ADD TO CART - £${finalPrice}`
                        : 'SELECT SIZE'
                    }
                    onClick={handleAddToCart}
                    disabled={!selectedSize.size || selectedSize.stock === 0}
                  />
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
      )}
      <CartModal
        title="Thank you for shopping with us"
        content="Your item has being added to the cart!"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ProductPage;
