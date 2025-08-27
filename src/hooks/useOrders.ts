import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { 
  createOrder, 
  fetchOrders, 
  setCurrentOrder, 
  updateOrderStatus, 
  clearError 
} from '@/store/slices/ordersSlice';
import { CartItem, CustomerInfo, PaymentInfo } from '@/types/store';

export const useOrders = () => {
  const dispatch = useAppDispatch();
  const { 
    orders, 
    currentOrder, 
    loading, 
    error 
  } = useAppSelector((state) => state.orders);

  const createNewOrder = async (payload: {
    items: CartItem[];
    customerInfo: CustomerInfo;
    paymentInfo: PaymentInfo;
    billingSameAsShipping: boolean;
  }) => {
    try {
      const result = await dispatch(createOrder(payload)).unwrap();
      return result;
    } catch (error) {
      throw error;
    }
  };

  const fetchAllOrders = async () => {
    try {
      const result = await dispatch(fetchOrders()).unwrap();
      return result;
    } catch (error) {
      throw error;
    }
  };

  const setOrder = (order: any) => {
    dispatch(setCurrentOrder(order));
  };

  const updateStatus = (orderId: string, status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled') => {
    dispatch(updateOrderStatus({ orderId, status }));
  };

  const clearOrderError = () => {
    dispatch(clearError());
  };

  const getOrderById = (orderId: string) => {
    return orders.find(order => order.id === orderId);
  };

  const getOrdersByStatus = (status: string) => {
    return orders.filter(order => order.status === status);
  };

  return {
    orders,
    currentOrder,
    loading,
    error,
    createNewOrder,
    fetchAllOrders,
    setOrder,
    updateStatus,
    clearOrderError,
    getOrderById,
    getOrdersByStatus,
  };
};
