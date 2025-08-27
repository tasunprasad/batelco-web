import Image from "next/image";

interface OrderProductItemProps {
  name: string;
  color: string;
  memory?: string;
  quantity: number;
  price: number;
  image: string;
}

export default function OrderProductItem({
  name,
  color,
  memory,
  quantity,
  price,
  image,
}: OrderProductItemProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4 border-b border-gray-200 relative">
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
        </div>
      </div>

      <div>
        <div className="text-[13px] lg:text-[14px] text-gray-600 mb-3">
          Quantity: {quantity}
        </div>
      </div>

      {/* Price */}
      <div className="text-left sm:text-right min-w-[110px]">
        <div className="font-[800] text-[#1A242D] text-[14px] sm:text-[15px]">
          BD {price.toFixed(3)}
        </div>
      </div>
    </div>
  );
}
