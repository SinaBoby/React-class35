import React, { useContext, useEffect } from 'react';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';
import { ProductContext } from '../ProductContext';
import useFetch from '../hooks/useFetch';
const ProductList = ({ isLoading, setLoading }) => {
  const { products, setProducts } = useContext(ProductContext);
  const [prods, loading, prodError] = useFetch(
    'https://fakestoreapi.com/products',
  );
  useEffect(() => {
    setProducts(prods);
    setLoading(loading);
  }, [prods]);
  return (
    <ul className="product__list">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : prodError ? <h2>{prodError.message}</h2>  :(
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      )}
    </ul>
  );
};

export default ProductList;
ProductList.propTypes = {
  products: PropTypes.array,
};
