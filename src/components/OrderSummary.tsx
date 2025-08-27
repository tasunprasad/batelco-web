"use client";

interface OrderSummaryProps {
  subtotal: number;
  shippingCost: number;
  vat: number;
  total: number;
  itemCount: number;
  onCheckout: () => void;
}

export default function OrderSummary({
  subtotal,
  shippingCost,
  vat,
  total,
  itemCount,
  onCheckout,
}: OrderSummaryProps) {
  return (
    <div className="border border-gray-200 rounded-[8px] p-6 sticky top-24">
      <h2 className="text-[16px] lg:text-[18px] font-bold text-[#1A242D] mb-6">
        Order summary
      </h2>

      {/* Cost Breakdown */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600 font-semibold text-[15px]">
            Sub total
          </span>
          <span className="text-gray-600 font-[700] text-[15px]">
            {subtotal.toFixed(2)} BD
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 font-semibold text-[15px]">
            Shipping cost
          </span>
          <span className="text-gray-600 font-[700] text-[15px]">
            {shippingCost.toFixed(2)} BD
          </span>
        </div>
        <div className="flex justify-between">
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
        <p className="text-gray-600 mt-1 text-[15px] font-semibold">
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </p>
      </div>

      {/* Checkout Button */}
      <button
        onClick={onCheckout}
        className="cursor-pointer min-h-[48px] w-full text-[15px] flex items-center justify-center py-2 px-4 rounded-[12px] font-medium transition-colors bg-[#A00D23] text-white hover:bg-[#A00D23]"
      >
        Checkout
      </button>

      {/* Payment Methods */}
      <div className="flex flex-wrap items-center justify-between pt-6">
        <p className="text-gray-600 font-medium text-[14px]">Payment methods</p>
        <img src="/images/payment-method-icon.png" alt="payment-method-icon" />
      </div>
    </div>
  );
}
