import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import MyButton from '../button/button';
import './heroBanner.css';

const HeroBanner = () => {
  return (
    <Jumbotron bsPrefix="jumbotron" id="background-image">
      <div>
        <h1 data-testid="headlineOffer">Up to 50% OFF in your first buy</h1>
        <p data-testid="subheadlinesentence">Be ready for anything...</p>
        <p>
          <MyButton variantValue="light" content="Shop Now" />
        </p>
      </div>
    </Jumbotron>
  );
};

export default HeroBanner;
