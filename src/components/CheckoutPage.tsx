"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useCheckout } from "@/hooks/useCheckout";
import { useOrders } from "@/hooks/useOrders";
import Breadcrumb from "./Breadcrumb";
import CheckoutForm from "./CheckoutForm";
import CheckoutOrderSummary from "./CheckoutOrderSummary";

export default function CheckoutPage() {
  const router = useRouter();
  const { items: cartItems, total: cartTotal } = useCart();
  const { customerInfo, paymentInfo } = useCheckout();
  const { createNewOrder } = useOrders();
  
  const [shippingCost] = useState(8.56);
  const [vat, setVat] = useState(0);
  const [total, setTotal] = useState(0);

  // Calculate totals based on cart data
  useEffect(() => {
    const calculatedVat = cartTotal * 0.05; // 5% VAT
    const calculatedTotal = cartTotal + shippingCost + calculatedVat;
    setVat(calculatedVat);
    setTotal(calculatedTotal);
  }, [cartTotal, shippingCost]);

  const handlePayment = async () => {
    // Validate that we have customer info and cart items
    if (!customerInfo || cartItems.length === 0) {
      alert("Please fill in all customer information and ensure cart has items");
      return;
    }

    // Debug: Check cart items structure
    console.log("Cart items before order creation:", cartItems);
    console.log("Cart items type:", typeof cartItems);
    console.log("Cart items is array:", Array.isArray(cartItems));
    console.log("Cart items length:", cartItems.length);

    try {
      console.log("Creating order with:", {
        customerInfo,
        cartItems,
        total: cartTotal
      });

      // Create the order
      const order = await createNewOrder({
        customerInfo,
        paymentInfo: paymentInfo || {
          cardNumber: '',
          expiryMonth: '',
          expiryYear: '',
          cvc: ''
        },
        billingSameAsShipping: true,
        items: cartItems
      });

      console.log("Order created successfully:", order);

      // Navigate to the new order page
      router.push(`/orders/${order.id}`);
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Failed to create order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Cart", href: "/cart" },
            { label: "Checkout" },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-[24px] lg:text-[36px] font-[800] text-[#1A242D] leading-tight mb-2">
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form - Takes 2/3 of the space on large screens */}
          <div className="lg:col-span-2">
            <div>
              <CheckoutForm />
            </div>
          </div>

          {/* Order Summary - Takes 1/3 of the space on large screens */}
          <div className="lg:col-span-1">
            <CheckoutOrderSummary
              subtotal={cartTotal}
              shippingCost={shippingCost}
              vat={vat}
              total={total}
              onPayment={handlePayment}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
