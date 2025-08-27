"use client";

import { useCart } from "@/hooks/useCart";

interface CheckoutOrderSummaryProps {
  subtotal: number;
  shippingCost: number;
  vat: number;
  total: number;
  onPayment: () => void;
}

export default function CheckoutOrderSummary({
  subtotal,
  shippingCost,
  vat,
  total,
  onPayment,
}: CheckoutOrderSummaryProps) {
  const { items: cartItems } = useCart();

  return (
    <div className="border border-gray-200 rounded-[8px] p-6 sticky top-24">
      <h2 className="text-[16px] lg:text-[18px] font-bold text-[#1A242D] mb-6">
        Order summary
      </h2>

      {/* Product Items */}
      <div className="space-y-4 mb-6">
        {cartItems.map((item, index) => (
          <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200">
            <div>
              <h3 className="text-gray-600 font-semibold text-[15px]">
                {item.name}
                {item.color && ` - ${item.color}`}
                {item.memory && ` (${item.memory})`}
              </h3>
              <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
            </div>
            <span className="text-gray-600 font-[700] text-[15px]">
              {(item.price * item.quantity).toFixed(3)} BD
            </span>
          </div>
        ))}
      </div>

      {/* Cost Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 font-semibold text-[15px]">
            Sub total
          </span>
          <span className="text-gray-600 font-[700] text-[15px]">
            {subtotal.toFixed(2)} BD
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 font-semibold text-[15px]">
            Shipping cost
          </span>
          <span className="text-gray-600 font-[700] text-[15px]">
            {shippingCost.toFixed(2)} BD
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 font-semibold text-[15px]">VAT</span>
          <span className="text-gray-600 font-[700] text-[15px]">
            {vat.toFixed(2)} BD
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-[16px] font-bold text-[#1A242D]">
            Estimated Total
          </span>
          <span className="text-[16px] font-bold text-[#1A242D]">
            {total.toFixed(2)} BD
          </span>
        </div>
      </div>

      {/* Payment Button */}
      <button
        onClick={onPayment}
        className="cursor-pointer min-h-[48px] w-full text-[15px] flex items-center justify-center py-2 px-4 rounded-[12px] font-medium transition-colors bg-[#A00D23] text-white hover:bg-[#A00D23]"
      >
        Pay {total.toFixed(2)} BD
      </button>

      {/* Payment Methods */}
      <div className="border-t border-gray-200 flex flex-wrap items-center justify-between pt-6">
        <p className="text-gray-600 font-medium text-[14px]">Payment methods</p>
        <img src="/images/payment-method-icon.png" alt="payment-method-icon" />
      </div>
    </div>
  );
}
