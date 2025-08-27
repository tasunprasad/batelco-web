import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CheckoutState, CustomerInfo, PaymentInfo } from '../../types/store';

const initialState: CheckoutState = {
  customerInfo: null,
  paymentInfo: null,
  billingSameAsShipping: true,
  isComplete: false,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCustomerInfo: (state, action: PayloadAction<CustomerInfo>) => {
      state.customerInfo = action.payload;
    },
    
    setPaymentInfo: (state, action: PayloadAction<PaymentInfo>) => {
      state.paymentInfo = action.payload;
    },
    
    setBillingSameAsShipping: (state, action: PayloadAction<boolean>) => {
      state.billingSameAsShipping = action.payload;
    },
    
    updateCustomerInfo: (state, action: PayloadAction<Partial<CustomerInfo>>) => {
      if (state.customerInfo) {
        state.customerInfo = { ...state.customerInfo, ...action.payload };
      }
    },
    
    updatePaymentInfo: (state, action: PayloadAction<Partial<PaymentInfo>>) => {
      if (state.paymentInfo) {
        state.paymentInfo = { ...state.paymentInfo, ...action.payload };
      }
    },
    
    setCheckoutComplete: (state, action: PayloadAction<boolean>) => {
      state.isComplete = action.payload;
    },
    
    resetCheckout: (state) => {
      state.customerInfo = null;
      state.paymentInfo = null;
      state.billingSameAsShipping = true;
      state.isComplete = false;
    },
  },
});

export const { 
  setCustomerInfo, 
  setPaymentInfo, 
  setBillingSameAsShipping,
  updateCustomerInfo,
  updatePaymentInfo,
  setCheckoutComplete,
  resetCheckout
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
