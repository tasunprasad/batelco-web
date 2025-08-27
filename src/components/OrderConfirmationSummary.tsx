interface OrderConfirmationSummaryProps {
  subtotal: number
  shippingCost: number
  vat: number
  total: number
}

export default function OrderConfirmationSummary({
  subtotal,
  shippingCost,
  vat,
  total
}: OrderConfirmationSummaryProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
      
      {/* Cost Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Sub total</span>
          <span className="text-gray-900">{subtotal.toFixed(2)} BD</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping cost</span>
          <span className="text-gray-900">{shippingCost.toFixed(2)} BD</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">VAT</span>
          <span className="text-gray-900">{vat.toFixed(2)} BD</span>
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">Estimated Total</span>
          <span className="text-xl font-bold text-gray-900">{total.toFixed(2)} BD</span>
        </div>
      </div>
    </div>
  )
}
