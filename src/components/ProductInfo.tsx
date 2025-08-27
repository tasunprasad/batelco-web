"use client";

import { useCart } from "@/hooks/useCart";
import { useState } from "react";

interface ProductInfoProps {
  brand: string;
  name: string;
  description: string;
  startingPrice: string;
  buyNowPrice: string;
  inStock: boolean;
  memoryOptions: string[];
  selectedMemory: string;
  colors: Array<{ name: string; code: string; selected: boolean }>;
  paymentMethods: string[];
  selectedPayment: string;
  installmentDurations: string[];
  selectedDuration: string;
  image?: string;
}

export default function ProductInfo({
  brand,
  name,
  description,
  startingPrice,
  buyNowPrice,
  inStock,
  memoryOptions,
  selectedMemory,
  colors,
  paymentMethods,
  selectedPayment,
  installmentDurations,
  selectedDuration,
  image,
}: ProductInfoProps) {
  const [selectedMem, setSelectedMem] = useState(selectedMemory);
  const [selectedCol, setSelectedCol] = useState(
    colors.find((c) => c.selected)?.name || colors[0]?.name
  );
  const [selectedPay, setSelectedPay] = useState(selectedPayment);
  const [selectedDur, setSelectedDur] = useState(selectedDuration);
  const [quantity, setQuantity] = useState(1);

  const { addItemToCart, isInCart, getItemQuantity } = useCart();

  // Create a unique ID based on name, color, and memory for cart checking
  const uniqueId = `${name}-${selectedCol}-${selectedMem}`
    .replace(/\s+/g, "-")
    .toLowerCase();
  const currentQuantity = getItemQuantity(uniqueId);
  const alreadyInCart = isInCart(uniqueId);

  const handleAddToCart = () => {
    // Extract price from buyNowPrice (remove "BD " prefix)
    const price = parseFloat(buyNowPrice.replace("BD ", ""));

    // Create a unique ID based on name, color, and memory
    const uniqueId = `${name}-${selectedCol}-${selectedMem}`
      .replace(/\s+/g, "-")
      .toLowerCase();

    addItemToCart(
      {
        id: uniqueId,
        name,
        color: selectedCol,
        memory: selectedMem,
        price,
        image: image || "/images/product-1.png", // use passed image or fallback
      },
      quantity
    );

    // Show success message or redirect
    console.log("Added to cart successfully!", {
      id: uniqueId,
      name,
      color: selectedCol,
      memory: selectedMem,
      price,
      quantity,
    });
  };

  return (
    <div className="space-y-8">
      {/* Brand and Title */}
      <div>
        <p className="text-[14px] text-[#1A242D] mb-2">{brand}</p>
        <h1 className="text-[24px] lg:text-[36px] font-[800] text-[#1A242D] leading-tight">
          {name}
        </h1>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-[16px] md:text-[20px] leading-relaxed font-[400] mx-w-[596px]">
        {description}
      </p>

      {/* Pricing */}
      <div className="flex flex-wrap gap-[20px] lg:gap-[32px]">
        <p className="text-[12px] lg:text-[14px] text-[#1A242D] font-semibold">
          Starting from <br />
          <span className="font-semibold text-[16px] lg:text-[24px] text-[#CE112D] mt-1 block">
            {startingPrice}
          </span>
        </p>
        <p className="text-[12px] lg:text-[14px] text-[#1A242D] font-semibold">
          Buy now from <br />
          <span className="font-semibold text-[16px] lg:text-[24px] text-[#CE112D] mt-1 block">
            {buyNowPrice}
          </span>
        </p>
      </div>

      {/* Memory Options */}
      <div>
        <h3 className="text-[12px] lg:text-[14px] font-medium text-gray-600 mb-3">
          Internal Memory
        </h3>
        <div className="flex flex-wrap gap-3">
          {memoryOptions.map((memory) => (
            <button
              key={memory}
              onClick={() => setSelectedMem(memory)}
              className={`cursor-pointer min-h-[40px] flex flex-wrap justify-center items-center text-[12px] lg:text-[14px] leading-tight font-semibold px-4 rounded-[8px]  transition-all duration-200 border-1 min-w-[105px] ${
                selectedMem === memory
                  ? "bg-[#ce112d12] text-[#CE112D] border-[#CE112D]"
                  : "bg-[#EFF0F1] text-[#1A242D] hover:bg-gray-200 border-[#EFF0F1]"
              }`}
            >
              {memory}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="text-[12px] lg:text-[14px] font-medium text-gray-600 mb-3">
          Color
        </h3>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedCol(color.name)}
              className={`cursor-pointer relative w-10 h-10 rounded-full border-1 transition-all duration-200 ${
                selectedCol === color.name
                  ? "border-[#CE112D] ring-2 ring-[#CE112D]"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              title={color.name}
            >
              <div
                className="w-full h-full rounded-full"
                style={{ backgroundColor: color.code }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="text-[12px] lg:text-[14px] font-medium text-gray-600 mb-3">
          Availability
        </h3>

        <div className="flex items-center gap-2">
          <img
            src="/images/check.png"
            className="w-[16px] h-[16px] lg:w-[22px] lg:h-[22px]"
            alt="check"
          />
          <span className="text-[14px] lg:text-[17px] font-medium text-[#27951E]">
            {inStock ? "in stock" : "out of stock"}
          </span>
        </div>
      </div>

      {/* Payment Method */}
      <div>
        <h3 className="text-[12px] lg:text-[14px] font-medium text-gray-600 mb-3">
          Payment Method
        </h3>
        <div className="flex flex-wrap gap-3">
          {paymentMethods.map((method) => (
            <button
              key={method}
              onClick={() => setSelectedPay(method)}
              className={`cursor-pointer min-h-[40px] flex flex-wrap justify-center items-center text-[12px] lg:text-[14px] leading-tight font-semibold px-4 rounded-[8px]  transition-all duration-200 border-1 min-w-[105px] ${
                selectedPay === method
                  ? "bg-[#ce112d12] text-[#CE112D] border-[#CE112D]"
                  : "bg-[#EFF0F1] text-[#1A242D] hover:bg-gray-200 border-[#EFF0F1]"
              }`}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* Installment Duration */}
      {selectedPay === "Pay in instalments" && (
        <div>
          <h3 className="text-[12px] lg:text-[14px] font-medium text-gray-600 mb-3">
            Device Instalment Duration
          </h3>
          <div className="flex flex-wrap gap-2">
            {installmentDurations.map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDur(duration)}
                className={`cursor-pointer min-h-[40px] flex flex-wrap justify-center items-center text-[12px] lg:text-[14px] leading-tight font-semibold px-4 rounded-[8px]  transition-all duration-200 border-1 min-w-[105px] ${
                  selectedDur === duration
                    ? "bg-[#ce112d12] text-[#CE112D] border-[#CE112D]"
                    : "bg-[#EFF0F1] text-[#1A242D] hover:bg-gray-200 border-[#EFF0F1]"
                }`}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-gray-700">Quantity:</label>
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              disabled={quantity <= 1}
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-16 text-center border-0 focus:outline-none focus:ring-0 text-sm"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!inStock || alreadyInCart}
          className={`cursor-pointer min-h-[48px] max-w-[340px] w-full text-[15px] flex items-center gap-2 justify-center py-2 px-4 rounded-[12px] font-medium transition-colors ${
            alreadyInCart
              ? "bg-green-600 text-white cursor-not-allowed"
              : inStock
              ? "bg-[#A00D23] text-white hover:bg-[#8A0A1E]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <img src="/images/cart-btn-icon.png" alt="cart icon" />
          {alreadyInCart
            ? `Already in Cart (${currentQuantity})`
            : "Add to cart"}
        </button>

        {/* Success Message */}
        {alreadyInCart && (
          <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
            ✓ This item is already in your cart
          </div>
        )}
      </div>
    </div>
  );
}
