"use client";

import { useCart } from "@/hooks/useCart";

export default function CartDemo() {
  const { items, total, itemCount, clearCartItems } = useCart();

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50">
      <h3 className="font-semibold text-gray-800 mb-2">Cart Demo</h3>
      <div className="text-sm text-gray-600 mb-2">
        Items: {itemCount} | Total: BD {total.toFixed(3)}
      </div>
      {items.length > 0 && (
        <div className="space-y-1 mb-3">
          {items.map((item) => (
            <div key={item.id} className="text-xs text-gray-500">
              {item.name} x{item.quantity} - BD {(item.price * item.quantity).toFixed(3)}
            </div>
          ))}
        </div>
      )}
      {items.length > 0 && (
        <button
          onClick={clearCartItems}
          className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}
