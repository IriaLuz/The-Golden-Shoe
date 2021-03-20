import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/products">
          <p>
            <ButtonComponent variantValue="light" content="Shop Now" />
          </p>
        </Link>
      </div>
    </Jumbotron>
  );
};

export default HeroBanner;
