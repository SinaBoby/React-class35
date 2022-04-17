import React, { useState } from 'react';
import NavListItem from './NavListItem';

const NavList = ({ categories, handleCategory }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <NavListItem
          key={index}
          selected={index === selectedIndex}
          onClickFunc={() => setSelectedIndex(index)}
          category={category}
          handleCategory={handleCategory}
        />
      ))}
    </div>
  );
};

export default NavList;
