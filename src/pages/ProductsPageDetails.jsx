import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsPageDetails = () => {
    const { productId } = useParams();
    console.log('productId', productId);
  return <div>ProductsPageDetails</div>;
};

export default ProductsPageDetails;
