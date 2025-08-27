"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    id: "1",
    name: "Fiber Broadband",
    description: "Choose the fiber internet package that's right for you",
    image: "/images/home-service-1.png",
    bgColor: "from-blue-500 to-blue-700",
  },
  {
    id: "2",
    name: "Fixed Line",
    description: "Reliable home phone service with crystal clear calls",
    image: "/images/home-service-2.png",
    bgColor: "from-green-500 to-green-700",
  },
  {
    id: "3",
    name: "Home Security",
    description: "Keep your home safe with our security solutions",
    image: "/images/home-service-3.png",
    bgColor: "from-purple-500 to-purple-700",
  },
];

export default function HomeServiceSlider() {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] lg:text-[48px] font-[800] text-[#1A242D] leading-[42px] lg:leading-[68px] mb-2">
            Home Services
          </h2>
          <p className="text-[20px] mb-6 max-w-2xl mx-auto text-[#404A52]">
            Connect to Bahrain&apos;s fast, reliable network.
          </p>
        </div>

        {/* Service Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".home-service-next",
              prevEl: ".home-service-prev",
            }}
            pagination={{
              clickable: true,
              el: ".home-service-pagination",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            className="home-service-swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="min-h-[520px] relative overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br flex items-center justify-center`}
                  >
                    <img
                      src={service.image}
                      className="w-full h-full object-center object-cover"
                      alt={service.name}
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-[28px] lg:text-[32px] font-[700]">
                      {service.name}
                    </h3>
                    <p className="text-[14px] lg:text-[18px] font-[200]">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <button className="home-service-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
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

          <button className="home-service-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
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
          </button>

          
          <div className="home-service-pagination flex justify-center mt-8 space-x-2"></div> */}
        </div>
      </div>

      <style jsx global>{`
        .home-service-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .home-service-swiper .swiper-pagination-bullet-active {
          background: #3b82f6;
          transform: scale(1.2);
        }

        .home-service-next:after,
        .home-service-prev:after {
          display: none;
        }
      `}</style>
    </section>
  );
}
