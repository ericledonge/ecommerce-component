import React from 'react';

import { Cart, Item, Menu as MenuModel } from '../domain/domain';
import MenuItem from './MenuItem';

type MenuProps = {
  menu: MenuModel;
  cart: Cart;
  addToCart: Function;
  getIsItemInCart: Function;
};

const Menu = ({ menu, cart, addToCart, getIsItemInCart }: MenuProps) => {
  const handleAddItemToCart = (item: Item) => addToCart(item);

  return (
    <div className="panel">
      <h1>To Go Menu</h1>
      <ul className="menu">
        {menu.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            isInCart={getIsItemInCart(cart, item)}
            addToCart={() => handleAddItemToCart(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
