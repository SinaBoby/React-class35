import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import NavListItem from './NavListItem';
import { ProductContext } from '../ProductContext';
import useFetch from '../hooks/useFetch';

const NavList = ({ setLoading }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const { setProducts } = useContext(ProductContext);

  const [categories, isLoading, error] = useFetch(
    'https://fakestoreapi.com/products/categories',
  );

  const handleCategory = (categoryName) => {
   
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${categoryName}`,
        );
        const json = await response.json();

        setProducts(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  };

  return (
    <div className="categories">
      {isLoading ? (
        <h3>Is Loading...</h3>
      ) : error ? (
        <h3>{error.message}</h3>
      ) : (
        categories.map((category, index) => (
          <NavListItem
            key={index}
            selected={index === selectedIndex}
            onClickFunc={() => setSelectedIndex(index)}
            category={category}
            handleCategory={handleCategory}
          />
        ))
      )}
    </div>
  );
};
NavList.propTypes = {
  setLoading: PropTypes.func,
};
export default NavList;
