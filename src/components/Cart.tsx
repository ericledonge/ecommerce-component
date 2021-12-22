import React from 'react';

import { Cart as CartModel, CartLine as CartLineModel } from '../domain/domain';
import CartLine from './CartLine';

type CartProps = {
  cart: CartModel;
  onDecreaseItemQuantityInCart: Function;
  onIncreaseItemQuantityInCart: Function;
  getIsCartEmpty: Function;
  getCartSubtotal: Function;
  getCartTaxesTotal: Function;
  getCartTotal: Function;
  formatPrice: Function;
};

const Cart = ({
  cart,
  onDecreaseItemQuantityInCart,
  onIncreaseItemQuantityInCart,
  getIsCartEmpty,
  getCartSubtotal,
  getCartTaxesTotal,
  getCartTotal,
  formatPrice,
}: CartProps) => {
  return (
    <div className="panel cart">
      <h1>Your Cart</h1>

      {getIsCartEmpty(cart) ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <ul className="cart-summary">
          {cart.map((cartLine: CartLineModel, index: number) => (
            <CartLine
              key={index}
              cartLine={cartLine}
              onDecreaseItemQuantityInCart={onDecreaseItemQuantityInCart}
              onIncreaseItemQuantityInCart={onIncreaseItemQuantityInCart}
              formatPrice={formatPrice}
            />
          ))}
        </ul>
      )}

      <div className="totals">
        <div className="line-item">
          <div className="label">Subtotal:</div>
          <div className="amount price subtotal">{getCartSubtotal(cart)}</div>
        </div>
        <div className="line-item">
          <div className="label">Tax:</div>
          <div className="amount price tax">{getCartTaxesTotal(cart)}</div>
        </div>
        <div className="line-item total">
          <div className="label">Total:</div>
          <div className="amount price total">{getCartTotal(cart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
