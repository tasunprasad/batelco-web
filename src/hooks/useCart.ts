import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart, removeFromCart, updateQuantity, clearCart } from '@/store/slices/cartSlice';
import { CartItem } from '@/types/store';

export const useCart = () => {
  const dispatch = useAppDispatch();
  const { items, total, itemCount } = useAppSelector((state) => state.cart);

  const addItemToCart = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    dispatch(addToCart({ ...item, quantity }));
  };

  const removeItemFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const updateItemQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  const getItemQuantity = (id: string) => {
    return items.find(item => item.id === id)?.quantity || 0;
  };

  const isInCart = (id: string) => {
    return items.some(item => item.id === id);
  };

  return {
    items,
    total,
    itemCount,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    clearCartItems,
    getItemQuantity,
    isInCart,
  };
};
