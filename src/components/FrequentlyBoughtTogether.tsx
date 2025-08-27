"use client";

interface FrequentlyBoughtTogetherProps {
  products: Array<{
    id: string;
    name: string;
    price: string;
    image: string;
    inStock: boolean;
  }>;
}

export default function FrequentlyBoughtTogether({
  products,
}: FrequentlyBoughtTogetherProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Frequently Bought Together
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">
                {product.price}
              </span>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                Add to cart
              </button>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  product.inStock ? "bg-green-500" : "bg-red-500"
                }`}
              />
              <span className="text-xs text-gray-600">
                {product.inStock ? "in stock" : "out of stock"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
