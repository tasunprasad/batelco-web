export const runtime = "edge";

import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import ProductHighlights from "@/components/ProductHighlights";
import ProductInfo from "@/components/ProductInfo";
import ProductSpecifications from "@/components/ProductSpecifications";
import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
    { label: "Mobile", href: "/products" },
    { label: product.name },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 md:py-10">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Product Images */}
          <ProductGallery
            images={product.images.map((image, index) => ({
              id: `${product.id}-${index}`,
              src: image,
              alt: `${product.name} - View ${index + 1}`,
              view:
                index === 0
                  ? "front-back"
                  : index === 1
                  ? "front"
                  : index === 2
                  ? "back-angle"
                  : "side",
            }))}
            productName={product.name}
          />

          {/* Product Information */}
          <ProductInfo
            brand={product.brand}
            name={product.name}
            description={product.description}
            startingPrice={product.startingPrice}
            buyNowPrice={product.buyNowPrice}
            inStock={product.inStock}
            memoryOptions={product.memoryOptions}
            selectedMemory={product.selectedMemory}
            colors={product.colors}
            paymentMethods={product.paymentMethods}
            selectedPayment={product.selectedPayment}
            installmentDurations={product.installmentDurations}
            selectedDuration={product.selectedDuration}
            image={product.images?.[0]}
          />
        </div>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ProductHighlights highlights={product.highlights} />
          <ProductSpecifications specifications={product.specifications} />
        </div>

        {/* Frequently Bought Together Section */}
        {/* <FrequentlyBoughtTogether products={product.frequentlyBoughtTogether} /> */}
      </div>
    </div>
  );
}
