import ProductGallery from '@/components/ProductGallery'

export default function ProductGalleryDemo() {
  const sampleImages = [
    {
      id: '1',
      src: '/images/product-1.png', // You can replace with actual smartphone images
      alt: 'iPhone 15 Pro Max - Front and Back View',
      view: 'front-back' as const
    },
    {
      id: '2',
      src: '/images/product-1.png',
      alt: 'iPhone 15 Pro Max - Front View',
      view: 'front' as const
    },
    {
      id: '3',
      src: '/images/product-1.png',
      alt: 'iPhone 15 Pro Max - Back Angle View',
      view: 'back-angle' as const
    },
    {
      id: '4',
      src: '/images/product-1.png',
      alt: 'iPhone 15 Pro Max - Side Profile',
      view: 'side' as const
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Product Gallery Demo
        </h1>
        
        <div className="max-w-6xl mx-auto">
          <ProductGallery 
            images={sampleImages}
            productName="iPhone 15 Pro Max"
          />
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• <strong>Main Display:</strong> Shows both front and back views simultaneously</li>
            <li>• <strong>Thumbnail Navigation:</strong> Four different viewing angles on the left</li>
            <li>• <strong>Interactive Selection:</strong> Click thumbnails to change main view</li>
            <li>• <strong>Responsive Design:</strong> Adapts from mobile to desktop layouts</li>
            <li>• <strong>Visual Feedback:</strong> Red border and dot indicator for selected view</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
