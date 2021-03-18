import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/card-1-shoe-model.jpg';

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/0074/1307/1990/products/TD1MECL080_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHER_ECLIPSE_BLACK_d1f73107-6102-48b9-9a61-56664e9418f7.png?v=1601053802"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="Second slide" />

      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
