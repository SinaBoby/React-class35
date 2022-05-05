import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <li className="product__card">
      <div className="product__content">
        <img src={product.image} alt={product.title} />
        <Link className="product__title" to={`/product/${product.id}`}>{product.title}</Link>
      </div>
    </li>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object.isRequired
}
export default ProductCard;
