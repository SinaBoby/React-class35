import React from 'react';
import PropTypes from 'prop-types';
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
NavListItem.propTypes = {
  category: PropTypes.string.isRequired,
  handleCategory: PropTypes.func.isRequired,
  selected : PropTypes.bool,
  onClickFunc : PropTypes.func
}
export default NavListItem;
