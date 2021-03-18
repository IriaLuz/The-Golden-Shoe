import React from 'react';
import ButtonComponent from '../../components/buttonComponent/buttonComponent';
import CustomAccordion from '../../components/customAccordion/customAccordion';
import CustomModal from '../customModal/customModal';
// import CustomCarousel from '../../components/customCarousel/customCarousel';
import image1 from './images/card-1-shoe-model.jpg';
import './productPage.css';

const ProductPage = () => {
  return (
    <>
      <div>
        <h2 className="product-title">Product Name</h2>
        <img className="product-img" src={image1} alt="shoe1" />
        <h3 className="title-button-product">SELECT SIZE:</h3>
        <ButtonComponent
          customStyle="btn-shoe-size"
          content="uk"
          subContent="3"
        />
      <CustomModal/>
      </div>
      <div>
        <h3 className="title-button-product">SELECT COLOR:</h3>
        <ButtonComponent customStyle="btn-shoe-color" />
      </div>
      <ButtonComponent
        className="button-cart"
        customStyle="btn-product"
        content="ADD TO CART"
      />
      <CustomAccordion
        className="accordion-style"
        accordionBtnTitle="Description"
        accordionBTnBody="Our breathable, silky-smooth sneaker made with responsibly sourced eucalyptus tree fiber treads lightly in everything you do. Made in Reading UK"
        accordionBtnListTitle="Features"
        accordionBtnListItems="Renewable Materials"
      />
    </>
  );
};

export default ProductPage;
