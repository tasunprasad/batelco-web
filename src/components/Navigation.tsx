"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 new-build">
      {/* Top Bar */}
      <div className="py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-xl font-bold text-gray-900 hover:text-red-600 transition-colors"
              >
                <img
                  src="/images/betelco-logo.png"
                  className="w-[100px] lg:w-[142px]"
                  alt="betelco-logo"
                />
              </Link>
            </div>

            {/* Top Navigation Links */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link
                href="/"
                className="text-[14px] text-[#ffffff] hover:text-[#ffffff] font-medium transition-colors py-1 px-4 bg-[#AE0F26] rounded-[100px]"
              >
                Personal
              </Link>
              <Link
                href="/"
                className="text-[14px] text-[#262626] hover:text-[#ffffff] font-medium transition-colors py-1 px-4 bg-transparent rounded-[100px] hover:bg-[#AE0F26]"
              >
                Business
              </Link>
              <Link
                href="/"
                className="text-[14px] text-[#262626] hover:text-[#ffffff] font-medium transition-colors py-1 px-4 bg-transparent rounded-[100px] hover:bg-[#AE0F26]"
              >
                Global
              </Link>
              <Link
                href="#"
                className="text-[14px] text-[#262626] hover:text-[#ffffff] font-medium transition-colors py-1 px-4 bg-transparent rounded-[100px] hover:bg-[#AE0F26]"
              >
                About Us
              </Link>
            </div>

            {/* Top Right Actions */}
            <div className="flex items-center space-x-3 md:space-x-6">
              <Link
                href="/cart"
                className="text-[#1A242D] transition-colors relative flex flex-wrap gap-1 items-center"
              >
                <img src="/images/nav-cart.png" alt="cart" />
                {itemCount > 0 && (
                  <span className="hidden md:flex absolute top-[-9px] left-[-9px] bg-[#AE0F26] text-white text-[8px] rounded-full w-5 h-5 items-center justify-center">
                    {itemCount > 0 ? itemCount : ""}
                  </span>
                )}

                <p className="text-[#1A242D] text-[14px] font-medium hidden md:block">
                  Cart
                </p>
              </Link>
              <Link
                href="/"
                className="text-[#1A242D] transition-colors relative flex flex-wrap gap-1 items-center"
              >
                <img src="/images/nav-quick-pay.png" alt="cart" />
                <p className="text-[#1A242D] text-[14px] hidden font-medium md:block">
                  Quick Pay
                </p>
              </Link>
              <Link
                href="/"
                className="text-[#1A242D] transition-colors relative flex flex-wrap gap-1 items-center"
              >
                <img src="/images/nav-account.png" alt="cart" />
                <p className="text-[#1A242D] text-[14px] hidden font-medium md:block">
                  Account
                </p>
              </Link>
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Main Navigation Links */}
          <div className="hidden lg:flex items-center py-3 space-x-8">
            <Link
              href="/"
              className="flex items-center text-[#1A242D] transition-colors group gap-1"
            >
              <img src="/images/devices-icon.png" alt="cart" />
              <span className="text-[14px] font-medium text-[#1A242D]">
                Devices
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center text-[#1A242D] transition-colors group gap-1"
            >
              <img src="/images/phone-icon.png" alt="cart" />
              <span className="text-[14px] font-medium text-[#1A242D]">
                Mobile
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center text-[#1A242D] transition-colors group gap-1"
            >
              <img src="/images/home-icon.png" alt="cart" />
              <span className="text-[14px] font-medium text-[#1A242D]">
                Home
              </span>
            </Link>
            <Link
              href="/products"
              className="flex items-center text-[#1A242D] transition-colors group gap-1"
            >
              <img src="/images/shop-icon.png" alt="cart" />
              <span className="text-[14px] font-medium text-[#1A242D]">
                Shop
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center text-[#1A242D] transition-colors group gap-1"
            >
              <img src="/images/help-icon.png" alt="cart" />
              <span className="text-[14px] font-medium text-[#1A242D]">
                Help
              </span>
            </Link>
          </div>

          {/* Right Side - Search and Language */}
          <div className="flex items-center py-3 space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center nav-search">
              <input type="text" placeholder="Search..." />
              <button>Search</button>
            </div>

            {/* Language Selector */}
            <div className="hidden md:flex items-center space-x-2">
              <img src="/images/nav-flag.png" alt="lan" />
              <span className="text-sm text-gray-700">EN</span>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-2 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Devices
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Mobile
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Shop
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Help
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
