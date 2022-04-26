import React from 'react';

const NavListItem = ({ category, handleCategory, selected, onClickFunc }) => {
  
  return (
    <div
      className={
        selected ? 'categories-item categories-item-selected ' : 'categories-item'
      }
      onClick={(e) => {
        onClickFunc();
        handleCategory(e.target.innerText);
      }}
    >
      {category}
    </div>
  );
};

export default NavListItem;
