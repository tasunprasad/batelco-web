import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { OrderState, Order, CartItem, CustomerInfo, PaymentInfo } from '../../types/store';

const initialState: OrderState = {
  orders: [],
  currentOrder: null,
  loading: false,
  error: null,
};

// Async thunk for creating a new order
export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async (payload: {
    items: CartItem[];
    customerInfo: CustomerInfo;
    paymentInfo: PaymentInfo;
    billingSameAsShipping: boolean;
  }) => {
    // Debug: Log the payload
    console.log("createOrder received payload:", payload);
    console.log("payload.items:", payload.items);
    console.log("payload.items type:", typeof payload.items);
    console.log("payload.items is array:", Array.isArray(payload.items));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newOrder: Order = {
      id: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      customerInfo: payload.customerInfo,
      items: payload.items.map(item => ({
        ...item,
        orderId: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      })),
      total: payload.items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      status: 'pending',
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    };
    
    return newOrder;
  }
);

// Async thunk for fetching orders
export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return mock orders for demo
    const mockOrders: Order[] = [
      {
        id: 'ORD-001',
        customerInfo: {
          email: 'demo@example.com',
          mobileNumber: '+97312345678',
          firstName: 'John',
          lastName: 'Doe',
          address: '123 Main St',
          apartment: 'Apt 4B',
          city: 'Manama',
          country: 'Bahrain',
          zipCode: '12345',
        },
        items: [
          {
            id: '1',
            name: 'iPhone 15 Pro Max',
            color: 'Natural Titanium',
            memory: '256GB',
            price: 999.000,
            image: '/images/iPhone-15-pro-max-img.png',
            quantity: 1,
            orderId: 'ORD-001',
          },
        ],
        total: 999.000,
        status: 'delivered',
        createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        estimatedDelivery: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        trackingNumber: 'TRK123456789',
      },
    ];
    
    return mockOrders;
  }
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setCurrentOrder: (state, action: PayloadAction<Order | null>) => {
      state.currentOrder = action.payload;
    },
    
    updateOrderStatus: (state, action: PayloadAction<{ orderId: string; status: Order['status'] }>) => {
      const order = state.orders.find(o => o.id === action.payload.orderId);
      if (order) {
        order.status = action.payload.status;
      }
      if (state.currentOrder?.id === action.payload.orderId) {
        state.currentOrder.status = action.payload.status;
      }
    },
    
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.unshift(action.payload);
        state.currentOrder = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create order';
      })
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch orders';
      });
  },
});

export const { 
  setCurrentOrder, 
  updateOrderStatus, 
  clearError 
} = ordersSlice.actions;

export default ordersSlice.reducer;
