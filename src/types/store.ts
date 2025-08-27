// Cart Item Types
export interface CartItem {
  id: string;
  name: string;
  color: string;
  memory?: string;
  price: number;
  image: string;
  quantity: number;
}

// Checkout Types
export interface CustomerInfo {
  email: string;
  mobileNumber: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  country: string;
  zipCode: string;
}

export interface PaymentInfo {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}

export interface CheckoutData {
  customerInfo: CustomerInfo;
  paymentInfo: PaymentInfo;
  billingSameAsShipping: boolean;
}

// Order Types
export interface OrderItem extends CartItem {
  orderId: string;
}

export interface Order {
  id: string;
  customerInfo: CustomerInfo;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  estimatedDelivery?: string;
  trackingNumber?: string;
}

// Store State Types
export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface CheckoutState {
  customerInfo: CustomerInfo | null;
  paymentInfo: PaymentInfo | null;
  billingSameAsShipping: boolean;
  isComplete: boolean;
}

export interface OrderState {
  orders: Order[];
  currentOrder: Order | null;
  loading: boolean;
  error: string | null;
}

export interface RootState {
  cart: CartState;
  checkout: CheckoutState;
  orders: OrderState;
}
