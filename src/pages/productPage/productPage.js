import React from 'react';
import ButtonComponent from '../../components/buttonComponent/buttonComponent';
import './productPage.css';

const ProductPage = () => {
    return ( 
        <>
        <h1>Product Page</h1>
        <ButtonComponent customStyle="btn-shoe-size" content='uk' subContent= '3'/>
        </>
     );
};
 
export default ProductPage;