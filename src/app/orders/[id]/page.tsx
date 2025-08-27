export const runtime = "edge";

import OrderConfirmationPage from "@/components/OrderConfirmationPage";

interface OrderPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function OrderPage({ params }: OrderPageProps) {
  await params; // Await params to satisfy Next.js 15 requirements
  return <OrderConfirmationPage />;
}
