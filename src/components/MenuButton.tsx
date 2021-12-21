import React from 'react';

import { Item } from '../domain/domain';
import check from '../images/check.svg';

type MenuButtonProps = {
  item: Item;
  isInCart: boolean;
  addToCart: Function;
};

const MenuButton = ({ item, isInCart, addToCart }: MenuButtonProps) => {
  const handleAddToCart = (item: Item) => addToCart(item);

  return (
    <>
      {isInCart ? (
        <button className="in-cart">
          <img src={check} alt="Check" />
          In Cart
        </button>
      ) : (
        <button className="add" onClick={() => handleAddToCart(item)}>
          Add to Cart
        </button>
      )}
    </>
  );
};

export default MenuButton;
