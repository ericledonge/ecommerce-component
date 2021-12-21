import './App.css';

import React from 'react';

import { MenuData } from '../data/menu';
import Cart from './components/Cart';
import Menu from './components/Menu';
import { useCart } from './hooks/useCart';

function App() {
  const menu = MenuData;

  const {
    cart,
    handleAddToCart,
    handleDecreaseItemQuantityInCart,
    handleIncreaseItemQuantityInCart,
    getIsItemInCart,
    getIsCartEmpty,
    getCartSubtotal,
    getCartTaxesTotal,
    getCartTotal,
  } = useCart();

  return (
    <div className="wrapper menu">
      <Menu
        menu={menu}
        cart={cart}
        addToCart={handleAddToCart}
        getIsItemInCart={getIsItemInCart}
      />

      <Cart
        cart={cart}
        onDecreaseItemQuantityInCart={handleDecreaseItemQuantityInCart}
        onIncreaseItemQuantityInCart={handleIncreaseItemQuantityInCart}
        getIsCartEmpty={getIsCartEmpty}
        getCartSubtotal={getCartSubtotal}
        getCartTaxesTotal={getCartTaxesTotal}
        getCartTotal={getCartTotal}
      />
    </div>
  );
}

export default App;
