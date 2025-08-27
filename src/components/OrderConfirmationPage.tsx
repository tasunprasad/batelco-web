"use client";

import { useOrders } from "@/hooks/useOrders";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import CustomerInformation from "./CustomerInformation";
import OrderDetails from "./OrderDetails";
import OrderProductItem from "./OrderProductItem";

export default function OrderConfirmationPage() {
  const params = useParams();
  const {
    orders,
    fetchAllOrders,
    getOrderById,
    loading: ordersLoading,
  } = useOrders();
  const [orderData, setOrderData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const realOrderSetRef = useRef(false);

  // Replace the previous "fetch once" + "build order" effects with this single robust effect
  useEffect(() => {
    let mounted = true;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const mapOrder = (order: any) => ({
      orderNumber: order.id || order._id,
      orderDate: new Date(
        order.createdAt || order.created_at
      ).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      estimatedArrival: order.estimatedDelivery
        ? new Date(order.estimatedDelivery).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        : "TBD",
      customerName: `${order.customerInfo?.firstName || ""} ${
        order.customerInfo?.lastName || ""
      }`.trim(),
      email: order.customerInfo?.email || "",
      mobileNumber: order.customerInfo?.mobileNumber || "",
      shippingAddress: `${order.customerInfo?.address || ""}${
        order.customerInfo?.apartment ? `, ${order.customerInfo.apartment}` : ""
      }${order.customerInfo?.city ? `, ${order.customerInfo.city}` : ""}${
        order.customerInfo?.country ? `, ${order.customerInfo.country}` : ""
      }${
        order.customerInfo?.zipCode ? ` ${order.customerInfo.zipCode}` : ""
      }`.trim(),
      products: (order.items || []).map((item: any) => ({
        name: item.name || "Product Name Not Available",
        color: item.color || "Color Not Available",
        memory: item.memory || "Memory Not Available",
        quantity: item.quantity || 1,
        price: item.price || 0,
        image: item.image || "/images/product-1.png",
      })),
      subtotal: order.total || 0,
      shippingCost: 8.56,
      vat: (order.total || 0) * 0.05,
      total: (order.total || 0) + 8.56 + (order.total || 0) * 0.05,
    });

    const loadAndPoll = async () => {
      const orderId = params?.id as string;
      if (!orderId) {
        if (mounted) {
          setOrderData(null);
          setLoading(false);
        }
        return;
      }

      setLoading(true);

      // Ensure we request latest orders
      try {
        await fetchAllOrders();
      } catch (err) {
        // ignore, we'll still poll getOrderById/fetched array
        console.error("fetchAllOrders error:", err);
      }

      // Poll for the order up to initialTimeout
      const interval = 200;
      const initialTimeout = 5000; // wait up to 5s initially
      const deadline = Date.now() + initialTimeout;
      let found: any = null;

      while (mounted && Date.now() < deadline) {
        found =
          getOrderById(orderId) ||
          (Array.isArray((await Promise.resolve()) as any)
            ? undefined
            : undefined);
        // try also searching the current orders array if available
        if (!found && Array.isArray((window as any).__orders_placeholder__)) {
          // noop; left intentionally blank — prefer getOrderById
        }
        if (found) break;
        await sleep(interval);
      }

      // if found, set mapped data and finish
      if (mounted && found) {
        realOrderSetRef.current = true;
        setOrderData(mapOrder(found));
        setLoading(false);
        return;
      }

      // Not found after initial wait: set fallback so UI doesn't stay stuck
      if (mounted && !realOrderSetRef.current) {
        // only write fallback if a real order hasn't already been set
        setOrderData({
          orderNumber: orderId || "Unknown",
          orderDate: new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
          estimatedArrival: new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
          ).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
          customerName: "Customer Name",
          email: "customer@example.com",
          mobileNumber: "+973 00000000",
          shippingAddress: "Address not available",
          products: [
            {
              name: "Product not found",
              color: "N/A",
              memory: "N/A",
              quantity: 1,
              price: 0,
              image: "/images/product-1.png",
            },
          ],
          subtotal: 0,
          shippingCost: 0,
          vat: 0,
          total: 0,
        });
        setLoading(false);
      }

      // Background polling: continue checking for the real order and replace fallback if it appears
      const bgTimeout = 10000; // keep polling for another 10s
      const bgDeadline = Date.now() + bgTimeout;
      while (mounted && Date.now() < bgDeadline) {
        const later = getOrderById(orderId);
        if (later) {
          if (mounted) {
            realOrderSetRef.current = true;
            setOrderData(mapOrder(later));
          }
          break;
        }
        await sleep(interval);
      }
    };

    loadAndPoll();

    return () => {
      mounted = false;
    };
    // only re-run when params.id changes to avoid loops; intentionally omit hook function deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  // Show loader while waiting for Redux fetch
  if (loading || ordersLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A00D23] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Order not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "My Orders", href: "/orders" },
            { label: orderData.orderNumber },
          ]}
        />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-[24px] lg:text-[36px] font-[800] text-[#1A242D] leading-tight mb-6">
              Order {orderData.orderNumber}
            </h1>
          </div>
        </div>

        <div className="pa-6 max-w-[810px] mx-auto">
          <img
            src="/images/order-check.png"
            className="w-[36px] h-[36px] lg:w-[68px] lg:h-[68px] mx-auto mb-4"
            alt="check"
          />
          <p className="text-[18px] lg:text-[22px] font-[800] text-[#1A242D] leading-tight text-center mb-2">
            Thank you for your purchase
          </p>

          <p className="text-gray-600 text-sm lg:text-[14px] text-center mb-8">
            You will receive an order confirmation email with details of your
            order
          </p>

          {/* Main Content - Takes 2/3 of the space on large screens */}

          <CustomerInformation
            customerName={orderData.customerName}
            email={orderData.email}
            mobileNumber={orderData.mobileNumber}
            shippingAddress={orderData.shippingAddress}
          />

          <OrderDetails
            orderNumber={orderData.orderNumber}
            orderDate={orderData.orderDate}
            estimatedArrival={orderData.estimatedArrival}
          />

          {/* Product Details */}
          <div>
            <div className="flex flex-wrap justify-between gap-4 py-4 border-t-1 border-b-1 border-gray-200">
              <p className="text-[14px] lg:text-[16px] font-[700] text-[#1A242D]">
                Product Details
              </p>
            </div>

            <div className="space-y-4">
              {orderData.products && orderData.products.length > 0 ? (
                orderData.products.map((product: any, index: number) => (
                  <OrderProductItem key={index} {...product} />
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>No products found in order data</p>
                  <p className="text-sm">
                    orderData: {JSON.stringify(orderData, null, 2)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* order summary */}

          <div className="mt-6 max-w-[348px] ml-auto">
            {/* Cost Breakdown */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold text-[15px]">
                  Sub total
                </span>
                <span className="text-gray-600 font-[700] text-[15px]">
                  {orderData.subtotal.toFixed(3)} BD
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold text-[15px]">
                  Shipping cost
                </span>
                <span className="text-gray-600 font-[700] text-[15px]">
                  {orderData.shippingCost.toFixed(3)} BD
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold text-[15px]">
                  VAT
                </span>
                <span className="text-gray-600 font-[700] text-[15px]">
                  {orderData.vat.toFixed(3)} BD
                </span>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-b border-gray-200 py-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-[16px] font-bold text-[#1A242D]">
                  Estimated Total
                </span>
                <span className="text-[16px] font-bold text-[#1A242D]">
                  {orderData.total.toFixed(3)} BD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
