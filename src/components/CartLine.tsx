import React from 'react';

import { CartLine as CartLineModel, Item } from '../domain/domain';
import chevron from '../images/chevron.svg';

type CartItemProps = {
  cartLine: CartLineModel;
  onDecreaseItemQuantityInCart: Function;
  onIncreaseItemQuantityInCart: Function;
  formatPrice: Function;
};

const CartLine = ({
  cartLine,
  onDecreaseItemQuantityInCart,
  onIncreaseItemQuantityInCart,
  formatPrice,
}: CartItemProps) => {
  const handleOnDecreaseItemQuantityInCart = (item: Item) =>
    onDecreaseItemQuantityInCart(item);
  const handleOnIncreaseItemQuantityInCart = (item: Item) => {
    onIncreaseItemQuantityInCart(item);
  };

  return (
    <li>
      <div className="plate">
        <img src={cartLine.item.picture} alt={cartLine.item.name} className="plate" />

        <div className="quantity">{cartLine.quantity}</div>
      </div>

      <div className="content">
        <p className="menu-item">{cartLine.item.name}</p>

        <p className="price">${cartLine.item.unitPrice}</p>
      </div>

      <div className="quantity__wrapper">
        <button
          className="decrease"
          onClick={() => handleOnDecreaseItemQuantityInCart(cartLine.item)}>
          <img src={chevron} alt="chevron" />
        </button>

        <div className="quantity">{cartLine.quantity}</div>

        <button
          className="increase"
          onClick={() => handleOnIncreaseItemQuantityInCart(cartLine.item)}>
          <img src={chevron} alt="chevron" />
        </button>
      </div>

      <div className="subtotal">
        ${formatPrice(cartLine.item.unitPrice * cartLine.quantity)}
      </div>
    </li>
  );
};

export default CartLine;
