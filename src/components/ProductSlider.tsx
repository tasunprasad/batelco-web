"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: "1",
    name: "iPhone 14 Pro",
    description:
      "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    startingPrice: "BD 12.917",
    buyNowPrice: "BD 364.540",
    image: "/images/product-1.png",
    inStock: true,
    slug: "iphone-14-pro",
  },
  {
    id: "2",
    name: "iPhone 15 Plus",
    description: "MULTITOUCH All-In-One",
    startingPrice: "BD 13.917",
    buyNowPrice: "BD 374.540",
    image: "/images/product-2.png",
    inStock: true,
    slug: "iphone-15-plus",
  },
  {
    id: "3",
    name: "iPhone 15 Pro",
    description: "MULTITOUCH All-In-One",
    startingPrice: "BD 14.917",
    buyNowPrice: "BD 384.540",
    image: "/images/product-3.png",
    inStock: true,
    slug: "iphone-15-pro",
  },
  {
    id: "4",
    name: "iPhone 15 Pro Max",
    description: "MULTITOUCH All-In-One",
    startingPrice: "BD 15.917",
    buyNowPrice: "BD 394.540",
    image: "/images/product-4.png",
    inStock: true,
    slug: "iphone-15-pro-max",
  },
];

export default function ProductSlider() {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] lg:text-[48px] font-[800] text-[#1A242D] leading-[42px] lg:leading-[68px] mb-2">
            Feel free to visit our amazing store
          </h2>
          <p className="text-[20px] mb-6 max-w-2xl mx-auto text-[#404A52]">
            Shop for latest devices, accessories, and more
          </p>
          <button className="cursor-pointer mx-auto text-[14px] flex justify-center items-center min-h-[48px] bg-white border-1 border-[#A00D23] text-[#A00D23] px-6 rounded-[100px] font-semibold hover:bg-[#A00D23] hover:text-white transition-colors transform">
            Visit Store
          </button>
        </div>

        {/* Product Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="product-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="py-3">
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {/* <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button> */}

          {/* Custom Pagination */}
          {/* <div className="swiper-pagination flex justify-center mt-8 space-x-2"></div> */}
        </div>
      </div>

      <style jsx global>{`
        .product-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .product-swiper .swiper-pagination-bullet-active {
          background: #a00d23;
          transform: scale(1.2);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          display: none;
        }
      `}</style>
    </section>
  );
}
