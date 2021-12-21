import { act, renderHook } from '@testing-library/react-hooks';

import { createItem } from '../../mocks/cartMocked';
import { useCart } from './useCart';

describe('useCart', () => {
  it('should add an item to the cart', () => {
    const { result } = renderHook(() => useCart());

    act(async () => {
      await result.current.handleAddToCart(createItem());
    });

    expect(result.current.cart).toHaveLength(1);
  });

  it('should increase item 1 quantity', () => {
    const { result } = renderHook(() => useCart());

    act(async () => {
      await result.current.handleAddToCart(createItem('itemX'));
      await result.current.handleIncreaseItemQuantityInCart(createItem('itemX'));
    });

    expect(result.current.cart).toHaveLength(1);
  });
});
