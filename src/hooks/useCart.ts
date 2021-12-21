import { useState } from 'react';

import {
  addToCart,
  Cart,
  decreaseItemQuantityInCart,
  getCartSubtotal,
  getCartTaxesTotal,
  getCartTotal,
  getIsCartEmpty,
  getIsItemInCart,
  increaseItemQuantityInCart,
  Item,
} from '../domain/domain';

export const useCart = () => {
  const [cart, setCart] = useState<Cart>([]);

  const handleAddToCart = (item: Item) => {
    setCart(addToCart(cart, item));
  };

  const handleDecreaseItemQuantityInCart = (item: Item) => {
    setCart(decreaseItemQuantityInCart(cart, item));
  };

  const handleIncreaseItemQuantityInCart = (item: Item) => {
    setCart(increaseItemQuantityInCart(cart, item));
  };

  return {
    cart,
    handleAddToCart,
    handleDecreaseItemQuantityInCart,
    handleIncreaseItemQuantityInCart,
    getIsCartEmpty,
    getIsItemInCart,
    getCartSubtotal,
    getCartTaxesTotal,
    getCartTotal,
  };
};
