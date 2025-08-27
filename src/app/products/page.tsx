import Link from 'next/link'
import { getAllProducts } from '@/lib/products'
import Breadcrumb from '@/components/Breadcrumb'

export default function ProductsPage() {
  const products = getAllProducts()

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-gray-100">
                {/* Placeholder for product image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Product Image</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">{product.buyNowPrice}</span>
                  <span className="text-sm text-gray-600">View Details</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
