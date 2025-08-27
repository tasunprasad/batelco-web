"use client";

import { useState } from "react";
import { useCart } from "@/hooks/useCart";

interface AddToCartProps {
  product: {
    id: string;
    name: string;
    color: string;
    memory?: string;
    price: number;
    image: string;
  };
}

export default function AddToCart({ product }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart, isInCart, getItemQuantity } = useCart();
  
  const currentQuantity = getItemQuantity(product.id);
  const alreadyInCart = isInCart(product.id);

  const handleAddToCart = () => {
    addItemToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center space-x-4">
        <label className="text-sm font-medium text-gray-700">Quantity:</label>
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors disabled:opacity-50"
            disabled={quantity <= 1}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <span className="px-4 py-2 text-sm font-medium text-gray-900 min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-[#A00D23] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#8A0A1E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={alreadyInCart}
      >
        {alreadyInCart ? `Already in Cart (${currentQuantity})` : 'Add to Cart'}
      </button>

      {/* Success Message */}
      {alreadyInCart && (
        <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
          ✓ This item is already in your cart
        </div>
      )}
    </div>
  );
}
