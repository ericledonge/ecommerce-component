import { createCart, createEmptyCart, createItem } from '../../mocks/cartMocked';
import {
  addToCart,
  Cart,
  decreaseItemQuantityInCart,
  formatPrice,
  getCartSubtotal,
  getCartTaxesTotal,
  getCartTotal,
  getIsCartEmpty,
  getIsItemInCart,
  getItemQuantityInCart,
  getMaxOrderId,
  getNextOrderId,
  increaseItemQuantityInCart,
  TAX,
} from './domain';

describe('use cases', () => {
  describe('addToCart', () => {
    describe('when adding an item to cart', () => {
      it('should add the item to the cart', () => {
        const emptyCart: Cart = [];
        const modifiedCart = addToCart(emptyCart, createItem('itemX'));

        expect(modifiedCart.length).toEqual(1);
        expect(getIsItemInCart(modifiedCart, createItem('itemX'))).toBeTruthy();
      });
    });
  });

  describe('decreaseItemQuantityInCart', () => {
    describe('when the quantity of the item is > 1', () => {
      it('should decrease the quantity of the item', () => {
        const currentCart = createCart();
        const modifiedCart = decreaseItemQuantityInCart(currentCart, createItem('item2'));

        expect(getItemQuantityInCart(modifiedCart, createItem('item2'))).toEqual(1);
      });
    });

    describe('when the quantity of the item is = 1', () => {
      it('should remove the item from the cart', () => {
        const currentCart = createCart();
        const modifiedCart = decreaseItemQuantityInCart(currentCart, createItem('item1'));

        expect(getIsItemInCart(modifiedCart, createItem('item1'))).toEqual(false);
      });
    });
  });

  describe('increaseItemQuantityInCart', () => {
    it('should increase the quantity of the item in the cart', () => {
      const currentCart = createCart();
      const modifiedCart = increaseItemQuantityInCart(currentCart, createItem('item1'));

      expect(modifiedCart.length).toEqual(3);
      expect(getItemQuantityInCart(modifiedCart, createItem('item1'))).toEqual(2);
    });
  });
});

describe('helpers', () => {
  describe('getIsCartEmpty', () => {
    describe('when cart is empty', () => {
      it('should return true', () => {
        const cart: Cart = [];

        expect(getIsCartEmpty(cart)).toBeTruthy();
      });
    });

    describe('when cart is not empty', () => {
      it('should return true', () => {
        const cart = createCart();

        expect(getIsCartEmpty(cart)).toBeFalsy();
      });
    });
  });

  describe('getIsItemInCart', () => {
    describe('when the item is not in the cart', () => {
      it('should return false', () => {
        const cart = createCart();

        expect(getIsItemInCart(cart, createItem('item4'))).toBeFalsy();
      });
    });

    describe('when the item is in the cart', () => {
      it('should return true', () => {
        const cart = createCart();

        expect(getIsItemInCart(cart, createItem('item2'))).toBeTruthy();
      });
    });
  });

  describe('getItemQuantityInCart', () => {
    describe('when there are asked item in cart', () => {
      it('should return the correct quantity of an item in the cart', () => {
        const cart = createCart();

        expect(getItemQuantityInCart(cart, createItem('item2'))).toEqual(2);
      });
    });

    describe('when there is no asked item in cart', () => {
      it('should return 0', () => {
        const cart = createCart();

        expect(getItemQuantityInCart(cart, createItem('item4'))).toEqual(0);
      });
    });
  });

  describe('getNextOrderId', () => {
    describe('when cart is empty', () => {
      it('should return 1', () => {
        const cart = createEmptyCart();

        expect(getNextOrderId(cart)).toEqual(1);
      });
    });

    describe('when cart has 1 item', () => {
      it('should return 2', () => {
        const cart = createEmptyCart();
        const modifiedCart = addToCart(cart, createItem());

        expect(getNextOrderId(modifiedCart)).toEqual(2);
      });
    });

    describe('when cart has 3 items', () => {
      it('should return 3', () => {
        const cart = createCart();
        expect(cart.length).toEqual(3);
        expect(getNextOrderId(cart)).toEqual(4);
      });

      describe('when removing 1 item from this cart', () => {
        it('should return 3', () => {
          const cart = createCart();
          const modifiedCart = decreaseItemQuantityInCart(cart, createItem('item1'));

          expect(getNextOrderId(modifiedCart)).toEqual(4);
        });
      });
    });
  });

  describe('getCartSubtotal', () => {
    describe('when there are items in the cart', () => {
      it('should return the correct subtotal', () => {
        const cart = createCart();

        expect(getCartSubtotal(cart)).toEqual(
          formatPrice(1 * 1.01 + 2 * 1.01 + 3 * 1.01),
        );
      });
    });

    describe('when there is no item in the cart', () => {
      it('should return 0', () => {
        const cart: Cart = [];

        expect(getCartSubtotal(cart)).toEqual(0);
      });
    });
  });

  describe('getCartTaxesTotal', () => {
    it('should return the correct tax amount', () => {
      const cart = createCart();

      expect(getCartTaxesTotal(cart)).toEqual(formatPrice(getCartSubtotal(cart) * TAX));
    });
  });

  describe('getCartTotal', () => {
    it('should return the correct total amount', () => {
      const cart = createCart();

      expect(getCartTotal(cart)).toEqual(
        formatPrice(getCartSubtotal(cart) + getCartTaxesTotal(cart)),
      );
    });
  });

  describe('formatPrice', () => {
    it('should format price in decimal format', () => {
      expect(formatPrice(2.05123)).toEqual(2.05);
    });
  });

  describe('getMaxOrderId', () => {
    it('should return 3', () => {
      const cart = createCart();

      expect(getMaxOrderId(cart)).toEqual(3);
    });
  });
});
