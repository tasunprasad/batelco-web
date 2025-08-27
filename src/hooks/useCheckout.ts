import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { 
  setCustomerInfo, 
  setPaymentInfo, 
  setBillingSameAsShipping,
  updateCustomerInfo,
  updatePaymentInfo,
  setCheckoutComplete,
  resetCheckout
} from '@/store/slices/checkoutSlice';
import { CustomerInfo, PaymentInfo } from '@/types/store';

export const useCheckout = () => {
  const dispatch = useAppDispatch();
  const { 
    customerInfo, 
    paymentInfo, 
    billingSameAsShipping, 
    isComplete 
  } = useAppSelector((state) => state.checkout);

  const setCustomer = (info: CustomerInfo) => {
    dispatch(setCustomerInfo(info));
  };

  const setPayment = (info: PaymentInfo) => {
    dispatch(setPaymentInfo(info));
  };

  const setBillingSame = (same: boolean) => {
    dispatch(setBillingSameAsShipping(same));
  };

  const updateCustomer = (updates: Partial<CustomerInfo>) => {
    dispatch(updateCustomerInfo(updates));
  };

  const updatePayment = (updates: Partial<PaymentInfo>) => {
    dispatch(updatePaymentInfo(updates));
  };

  const completeCheckout = (complete: boolean = true) => {
    dispatch(setCheckoutComplete(complete));
  };

  const resetCheckoutData = () => {
    dispatch(resetCheckout());
  };

  const isCheckoutValid = () => {
    return customerInfo && paymentInfo && isComplete;
  };

  return {
    customerInfo,
    paymentInfo,
    billingSameAsShipping,
    isComplete,
    setCustomer,
    setPayment,
    setBillingSame,
    updateCustomer,
    updatePayment,
    completeCheckout,
    resetCheckoutData,
    isCheckoutValid,
  };
};
