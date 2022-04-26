import React, { useState, useEffect } from 'react';
import NavListItem from './NavListItem';

const NavList = ({ setProducts,setSelectedCategory }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [categories, setCategories] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        setProducts(json);
      
      } catch (error) {
        console.log(error);
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
        console.log(json);
        setCategories(json);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const handleCategory = (categoryName) => {
    (async () => {
      try {
        setSelectedCategory(categoryName)
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${categoryName}`,
        );
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div className="categories">
      {isloading ? (
        <h3>Is Loading...</h3>
      ) : !categories ? (
        <h3>No categories(Server Error)</h3>
      ) : (
        categories.map((category, index) => (
          <NavListItem
            key={index}
            selected={index === selectedIndex}
            onClickFunc={() => setSelectedIndex(index)}
            category={category}
            handleCategory={handleCategory}
            setProducts={setProducts}
          />
        ))
      )}
    </div>
  );
};

export default NavList;
