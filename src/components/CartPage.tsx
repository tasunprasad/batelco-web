"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import Breadcrumb from "./Breadcrumb";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

export default function CartPage() {
  const router = useRouter();
  const { items: cartItems, total: cartTotal } = useCart();
  
  const shippingCost = 8.56;
  const vat = cartTotal * 0.05; // 5% VAT
  const total = cartTotal + shippingCost + vat;

  const handleCheckout = () => {
    // Navigate to checkout page
    router.push("/checkout");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Cart" }]}
          />

          <div className="max-w-2xl mx-auto text-center py-16">
            <svg
              className="w-24 h-24 text-gray-300 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
              />
            </svg>
            <h1 className="text-3xl font-bold text-[#1A242D] mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven&apos;t added any items to your cart yet.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#A00D23] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#A00D23] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />

        <div>
          <h1 className="text-[24px] lg:text-[36px] font-[800] text-[#1A242D] leading-tight mb-6">
            Your cart
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items - Takes 2/3 of the space on large screens */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-gray-600 text-[13px] lg:text-[14px] font-medium">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
              </p>
              <p className="text-gray-600 text-[13px] lg:text-[14px] font-medium">
                Need help? Call{" "}
                <span className="font-semibold">+973 38916611</span>
              </p>
            </div>
            <div>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
          </div>

          {/* Order Summary - Takes 1/3 of the space on large screens */}
          <div className="lg:col-span-1">
            <OrderSummary
              subtotal={cartTotal}
              shippingCost={shippingCost}
              vat={vat}
              total={total}
              itemCount={cartItems.length}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
