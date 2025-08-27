"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: {
    id: string;
    src: string;
    alt: string;
    view: "front-back" | "front" | "back-angle" | "side";
  }[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Thumbnail Images - Left Column */}
      <div className="flex lg:flex-col gap-3 sm:gap-4 order-2 lg:order-1">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative cursor-pointer transition-all duration-200 ${
              selectedImage === index
                ? "ring-2 ring-[#7C0A1B] ring-offset-2 rounded-[4px]"
                : "hover:opacity-80"
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border border-gray-200 rounded-[4px] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Product Display - Right Side */}
      <div className="flex-1 order-1 lg:order-2">
        <div className="relative p-6 lg:p-8">
          <div className="aspect-square max-w-2xl mx-auto">
            <Image
              src={images[selectedImage].src}
              alt={`${productName} - ${images[selectedImage].view} view`}
              width={600}
              height={600}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
