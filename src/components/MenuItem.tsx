import React from 'react';

import { Item } from '../domain/domain';
import MenuButton from './MenuButton';

type MenuItemProps = {
  item: Item;
  isInCart: boolean;
  addToCart: Function;
};

const MenuItem = ({ item, isInCart, addToCart }: MenuItemProps) => {
  return (
    <li>
      <div className="plate">
        <img src={item.picture} alt="French Fries" className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{item.name}</p>
        <p className="price">${item.unitPrice}</p>
        <MenuButton item={item} isInCart={isInCart} addToCart={addToCart} />
      </div>
    </li>
  );
};

export default MenuItem;
