import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardDeck } from 'react-bootstrap';
import ProductCard from '../../components/productCard/productCard';
import './productsPage.css';

const ProductsPage = () => {
  return (
    <Container>
      <>
        <hr id="divider-card-style" />
        <CardDeck bsPrefix="cards-container card-deck">
          <Col>
            <Row>
              <ProductCard
                image="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageAngle_24fc0bab-31c1-40c4-9363-166541d7a70a.png?v=1614723172"
                title="Tree Runners"
                textStyling="style-text-cardbody"
                cardBody="This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer."
                buttonStyling="btn-card"
                buttonLabel="Shop Now"
                cardFooterText="Breezy Sneaker"
                buttonLink="/products/1"
              />
              <ProductCard
                image="https://clarks.scene7.com/is/image/Pangaea2Build/26147956_W_1?wid=2000&hei=2000&fmt=jpg"
                title="Tan Leather"
                textStyling="color-text"
                cardBody="This card has supporting text below as a natural lead-in to
        additional content."
                buttonStyling="btn-card"
                buttonLabel="Shop Now"
                cardFooterText="Strong and light"
                buttonLink="/products/2"
              />
              <ProductCard
                image="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/TB1WHBK080_SHOE_ANGLE_GLOBAL_WOMENS_TREE_BREEZERS_HEATHERED_BLACK_BLACK_82fa40cf-f47f-45e2-9efc-d4ac34740148.png?v=1598999348"
                title="Women's Tree Breezers"
                textStyling="color-text"
                cardBody="This is a wider card with supporting text below as a natural lead-in
        to additional content. This card has even longer content than the
        first to show that equal height action."
                buttonStyling="btn-card"
                buttonLabel="Shop Now"
                cardFooterText="Long-lasting cushioning"
                buttonLink="/products/3"
              />
            </Row>
            <Row>
              <ProductCard
                image="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageAngle_24fc0bab-31c1-40c4-9363-166541d7a70a.png?v=1614723172"
                title="Tree Runners"
                textStyling="style-text-cardbody"
                cardBody="This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer."
                buttonStyling="btn-card"
                buttonLabel="Shop Now"
                cardFooterText="Breezy Sneaker"
                buttonLink="/products/1"
              />
              <ProductCard
                image="https://clarks.scene7.com/is/image/Pangaea2Build/26147956_W_1?wid=2000&hei=2000&fmt=jpg"
                title="Tan Leather"
                textStyling="color-text"
                cardBody="This card has supporting text below as a natural lead-in to
        additional content."
                buttonStyling="btn-card"
                buttonLabel="Shop Now"
                cardFooterText="Strong and light"
                buttonLink="/products/2"
              />
              <ProductCard
                image="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/TB1WHBK080_SHOE_ANGLE_GLOBAL_WOMENS_TREE_BREEZERS_HEATHERED_BLACK_BLACK_82fa40cf-f47f-45e2-9efc-d4ac34740148.png?v=1598999348"
                title="Women's Tree Breezers"
                textStyling="color-text"
                cardBody="This is a wider card with supporting text below as a natural lead-in
        to additional content. This card has even longer content than the
        first to show that equal height action."
                buttonStyling="btn-card"
                buttonLabel="Shop Now"
                cardFooterText="Long-lasting cushioning"
                buttonLink="/products/3"
              />
            </Row>
            <Row>
              <ProductCard
                image="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/Men_s_Tree_Runners_-_Charcoal__Charcoal_Sole__-_imageAngle_24fc0bab-31c1-40c4-9363-166541d7a70a.png?v=1614723172"
                title="Tree Runners"
                textStyling="style-text-cardbody"
                cardBody="This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer."
                buttonStyling="btn-card"
                buttonLabel="Shop Now"
                cardFooterText="Breezy Sneaker"
                buttonLink="/products/1"
              />
              <ProductCard
                image="https://clarks.scene7.com/is/image/Pangaea2Build/26147956_W_1?wid=2000&hei=2000&fmt=jpg"
                title="Tan Leather"
                textStyling="color-text"
                cardBody="This card has supporting text below as a natural lead-in to
        additional content."
                buttonStyling="btn-card"
                buttonLabel="Shop Now"
                cardFooterText="Strong and light"
                buttonLink="/products/2"
              />
              <ProductCard
                image="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/TB1WHBK080_SHOE_ANGLE_GLOBAL_WOMENS_TREE_BREEZERS_HEATHERED_BLACK_BLACK_82fa40cf-f47f-45e2-9efc-d4ac34740148.png?v=1598999348"
                title="Women's Tree Breezers"
                textStyling="color-text"
                cardBody="This is a wider card with supporting text below as a natural lead-in
        to additional content. This card has even longer content than the
        first to show that equal height action."
                buttonStyling="btn-card"
                buttonLabel="Shop Now"
                cardFooterText="Long-lasting cushioning"
                buttonLink="/products/3"
              />
            </Row>
          </Col>
        </CardDeck>
      </>
    </Container>
  );
};

export default ProductsPage;
