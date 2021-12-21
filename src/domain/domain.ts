// entities

export type Menu = Array<Item>;

export type Cart = Array<CartLine>;

export type Item = {
  name: string;
  unitPrice: number;
  picture: any;
};

export type CartLine = {
  item: Item;
  quantity: number;
  order: number;
};

// use cases

// TODO: Manage cart order
export const addToCart = (currentCart: Cart, item: Item): Cart => {
  const order = getNextOrderId(currentCart);
  const itemCart: CartLine = { item, quantity: 1, order };
  return getCartSorted([...currentCart, itemCart]);
};

export const decreaseItemQuantityInCart = (currentCart: Cart, item: Item): Cart => {
  let newCart = currentCart;
  if (getIsItemInCart(newCart, item)) {
    const cartWithoutAskedItem = currentCart.filter(
      (cartLine) => cartLine.item.name !== item.name,
    );
    if (getItemQuantityInCart(currentCart, item) > 1) {
      const itemInCartAsked = currentCart.find(
        (cartLine) => cartLine.item.name === item.name,
      );
      if (cartWithoutAskedItem && itemInCartAsked) {
        itemInCartAsked.quantity--;
        newCart = [...cartWithoutAskedItem, itemInCartAsked];
      }
    } else {
      if (cartWithoutAskedItem) {
        newCart = [...cartWithoutAskedItem];
      }
    }
  }

  return getCartSorted(newCart);
};

export const increaseItemQuantityInCart = (currentCart: Cart, item: Item): Cart => {
  let newCart = currentCart;
  const cartWithoutSearchedItem = currentCart.filter(
    (cartLine) => cartLine.item.name !== item.name,
  );
  const cartLineSearched = currentCart.find(
    (cartLine) => cartLine.item.name === item.name,
  );
  if (cartWithoutSearchedItem && cartLineSearched) {
    cartLineSearched.quantity = cartLineSearched.quantity + 1;
    newCart = [...cartWithoutSearchedItem, cartLineSearched];
  }

  return getCartSorted(newCart);
};

// helpers

export const getMaxOrderId = (cart: Cart): number => {
  const orderIds = cart.map((cartLine) => cartLine.order);
  if (orderIds.length === 0) {
    return 0;
  }
  return Math.max(...orderIds);
};

export const getNextOrderId = (cart: Cart) => {
  return getMaxOrderId(cart) + 1;
};

export const getCartSorted = (cart: Cart) => {
  return cart.sort((a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getIsCartEmpty = (cart: Cart) => cart.length === 0;

export const getIsItemInCart = (cart: Cart, item: Item): boolean => {
  let isInCart = false;

  cart.map((cartLine) => {
    if (cartLine.item.name === item.name) {
      isInCart = true;
    }
  });

  return isInCart;
};

export const getItemQuantityInCart = (cart: Cart, item: Item): number => {
  let quantity = 0;
  if (getIsItemInCart(cart, item)) {
    const cartLine = cart.filter((cartLine) => cartLine.item.name === item.name);
    quantity = cartLine[0].quantity;
  }

  return quantity;
};

export const getCartSubtotal = (cart: Cart): number => {
  return formatPrice(
    cart.reduce(
      (accumulator, itemInCart) =>
        accumulator + itemInCart.item.unitPrice * itemInCart.quantity,
      0,
    ),
  );
};

export const getCartTaxesTotal = (cart: Cart): number => {
  return formatPrice(getCartSubtotal(cart) * TAX);
};

export const getCartTotal = (cart: Cart): number => {
  return formatPrice(getCartSubtotal(cart) + getCartTaxesTotal(cart));
};

export const formatPrice = (unFormattedPrice: number): number => {
  return Number(unFormattedPrice.toFixed(2));
};

// constants

export const TAX = 0.0975;
