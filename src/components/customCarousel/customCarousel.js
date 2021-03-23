import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CustomCarousel = ({ images }) => {
  return (
    <Carousel interval={null}>
      {images.map((image) => (
        <Carousel.Item key={`id-${image.alt}`}>
          <img className="d-block w-100" src={image.src} alt={image.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
