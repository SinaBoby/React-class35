import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../FavoritesContext';
import regularHeart from '../assets/heart-regular.svg';
import solidHeart from '../assets/heart-solid.svg';

const ProductCard = ({ product }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const toggleFavorite = () => {
    setFavorites((prevState) => {
      const arr = prevState.includes(product.id)
        ? prevState.filter((i) => i !== product.id) // remove item
        : [...prevState, product.id]; // add item
      return [...arr];
    });
  };
  
  return (
    <li className="product__card">
      <div className="product__content">
        <div className="product-image-container">
        <img src={product.image} alt={product.title}   className="product-image"/>
        <div className='product-image--favourite-container'  >

        <img
          src={favorites.indexOf(product.id) > -1 ? solidHeart : regularHeart}
          alt={product.id}
          
          onClick={toggleFavorite}
        />
        </div>
        </div>
        
        
        <Link className="product__title" to={`/product/${product.id}`}>
          {product.title}
        </Link>
      </div>
    </li>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
export default ProductCard;
