import productsData from '@/data/products.json'

export interface Product {
  id: string
  brand: string
  name: string
  description: string
  startingPrice: string
  buyNowPrice: string
  inStock: boolean
  images: string[]
  memoryOptions: string[]
  selectedMemory: string
  colors: Array<{ name: string; code: string; selected: boolean }>
  paymentMethods: string[]
  selectedPayment: string
  installmentDurations: string[]
  selectedDuration: string
  highlights: string[]
  specifications: Record<string, string>
  frequentlyBoughtTogether: Array<{
    id: string
    name: string
    price: string
    image: string
    inStock: boolean
  }>
}

export function getProductById(id: string): Product | null {
  const product = productsData.products.find(p => p.id === id)
  return product || null
}

export function getAllProducts(): Product[] {
  return productsData.products
}

