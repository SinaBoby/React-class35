import React,{useContext} from 'react';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';
import { ProductContext } from '../ProductContext';
const ProductList = () => {
  
  const {products} = useContext(ProductContext)
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