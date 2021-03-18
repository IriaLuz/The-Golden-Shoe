import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ButtonComponent from '../buttonComponent/buttonComponent';
import './heroBanner.css';

const HeroBanner = () => {
  return (
    <Jumbotron bsPrefix="jumbotron" id="background-image-herobanner">
      <div>
        <h1 className="text-style-herobanner" data-testid="headlineOffer">
          Up to 50% OFF in your first buy
        </h1>
        <p className="text-style-herobanner" data-testid="subheadlinesentence">
          Be ready for anything...
        </p>
        <p>
          <ButtonComponent variantValue='light' content="Shop Now" />
        </p>
      </div>
    </Jumbotron>
  );
};

export default HeroBanner;
