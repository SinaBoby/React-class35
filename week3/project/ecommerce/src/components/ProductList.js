import React from 'react';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => {
  
  
  return (
    <ul className="product__list">
      {products.map((product, index) => (
      <ProductCard key={index} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
ProductList.propTypes = {
  products : PropTypes.array
  
}