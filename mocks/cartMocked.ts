import { Cart, Item } from '../src/domain/domain';

export const createItem = (name: string = 'item1'): Item => {
  return {
    name,
    unitPrice: 1.01,
    picture: 'picture',
  };
};

export const createCartLine = (name: string, quantity: number, order: number) => {
  return {
    item: createItem(name),
    quantity,
    order,
  };
};

export const createCart = (): Cart => {
  return [
    { item: createItem('item1'), quantity: 1, order: 1 },
    { item: createItem('item2'), quantity: 2, order: 2 },
    { item: createItem('item3'), quantity: 3, order: 3 },
  ];
};

export const createEmptyCart = (): Cart => [];
