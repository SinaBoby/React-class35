import React, { useState, useEffect } from 'react';
import NavListItem from './NavListItem';

const NavList = ({
  setProducts,
  setProdLoading,
  setProdError,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [categories, setCategories] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        setProducts(json);
        setProdLoading(false);
      } catch (error) {
        console.log(error);
        setProdError(error);
        setProdLoading(false);
      }
    })();
  }, [setProducts]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories',
        );
        const json = await response.json();
        setCategories(json);
        setIsloading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setIsloading(false);
      }
    })();
  }, []);
  const handleCategory = (categoryName) => {
    (async () => {
      try {
        setProdLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${categoryName}`,
        );
        const json = await response.json();
        setProducts(json);
        setProdLoading(false);
      } catch (error) {
        console.log(error);
        setProdError(error);
        setProdLoading(false);
      }
    })();
  };

  return (
    <div className="categories">
      {isloading ? (
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

export default NavList;
