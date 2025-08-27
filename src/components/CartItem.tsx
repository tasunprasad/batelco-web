"use client";

import Image from "next/image";
import { useCart } from "@/hooks/useCart";

interface CartItemProps {
  id: string;
  name: string;
  color: string;
  memory?: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartItem({
  id,
  name,
  color,
  memory,
  price,
  image,
  quantity,
}: CartItemProps) {
  const { updateItemQuantity, removeItemFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateItemQuantity(id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeItemFromCart(id);
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-4 py-6 border-b border-gray-200 relative">
      <div className="flex flex-col sm:flex-row items-start sm:items-center">
        {/* Product Image */}
        <div className="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 border-1 border-gray-200 rounded-[4px] mr-4 mb-2">
          <Image
            src={image}
            alt={name}
            width={86}
            height={86}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="min-w-[270px] xl:min-w-[292px]">
          <h3 className="font-semibold text-[#1A242D] text-[14px] sm:text-[15px] mb-1">
            {name}
          </h3>
          <div className="text-[13px] lg:text-[14px] text-gray-600 mb-2">
            <span>Color: {color}</span>
            {memory && (
              <span className="ml-2">| Internal Memory: {memory}</span>
            )}
          </div>

          {/* Availability */}
          <div>
            <div className="flex items-center text-sm gap-1">
              <img
                src="/images/check.png"
                width="12"
                height="12"
                alt="check img"
                className="mt-[-3px]"
              />
              <span className="text-[#27951E] font-medium text-[13px] lg:text-[14px] block">
                in stock
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="space-x-2">
        <label className="text-[13px] lg:text-[14px] text-gray-600 mb-3">
          Quantity:
        </label>
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="px-2 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors"
            disabled={quantity <= 1}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>
          <span className="px-3 py-1 text-sm font-medium text-gray-900 min-w-[2rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="px-2 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Price and Remove */}
      <div className="flex min-w-[110px]">
        <div className="text-right">
          <div className="font-[800] text-[#1A242D] text-[14px] sm:text-[15px]">
            BD {price.toFixed(3)}
          </div>
        </div>
      </div>

      <div className="lg:relative">
        <button
          onClick={handleRemove}
          className="text-gray-400 hover:text-red-600 transition-colors p-1 cursor-pointer absolute top-[20px] lg:top-[-15px] lg:right-[0] right-[10px]"
          aria-label="Remove item"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
