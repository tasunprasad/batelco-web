import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  startingPrice: string;
  buyNowPrice: string;
  image: string;
  inStock: boolean;
  slug: string;
}

export default function ProductCard({
  id,
  name,
  description,
  startingPrice,
  buyNowPrice,
  image,
  inStock,
  slug,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="p-4">
        <img src={image} className="w-full" alt="product image" />

        {/* Product Info */}

        <div className="flex items-center space-x-2">
          <div
            className={`w-2 h-2 rounded-full ${
              inStock ? "bg-green-500" : "bg-[#A00D23]"
            }`}
          ></div>
          <span
            className={`text-xs font-medium ${
              inStock ? "text-green-600" : "text-[#A00D23]"
            }`}
          >
            {inStock ? "in stock" : "out of stock"}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-[18px] font-extrabold text-[#212121] line-clamp-2">
            {name}
          </h3>

          <p className="text-[12px] text-gray-600 line-clamp-2 min-h-[36px]">
            {description}
          </p>

          {/* Pricing */}
          <div className="flex flex-wrap items-center justify-between space-y-2">
            <div className="text-[14px] text-[#1A242D] w-[48%]">
              Starting from <br />
              <span className="font-semibold text-[#A00D23]">
                {startingPrice}
              </span>
            </div>
            <div className="text-[14px] text-[#1A242D] w-[48%]">
              Buy now from <br />
              <span className="font-semibold text-[#A00D23]">
                {buyNowPrice}
              </span>
            </div>
          </div>

          {/* Buy Button */}
          <Link
            href={`/products/${slug}`}
            className={`cursor-pointer min-h-[48px] w-full text-[15px] flex items-center justify-center py-2 px-4 rounded-[12px] font-medium transition-colors ${
              inStock
                ? "bg-[#A00D23] text-white hover:bg-[#A00D23]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
