interface OrderDetailsProps {
  orderNumber: string;
  orderDate: string;
  estimatedArrival: string;
}

export default function OrderDetails({
  orderNumber,
  orderDate,
  estimatedArrival,
}: OrderDetailsProps) {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-4 py-4 border-t-1 border-gray-200">
        <p className="text-[14px] lg:text-[16px] font-[700] text-[#1A242D] w-[47%]">
          Order No.
        </p>
        <p className="text-[14px] lg:text-[16px] font-medium text-[#1A242D] w-[47%] text-right">
          {orderNumber}
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-4 py-4 border-t-1 border-gray-200">
        <p className="text-[14px] lg:text-[16px] font-[700] text-[#1A242D] w-[47%]">
          Order Date
        </p>
        <p className="text-[14px] lg:text-[16px] font-medium text-[#1A242D] w-[47%] text-right">
          {orderDate}
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-4 py-4 border-gray-200">
        <p className="text-[14px] lg:text-[16px] font-[700] text-[#1A242D] w-[47%]">
          Est. Arrival Date
        </p>
        <p className="text-[14px] lg:text-[16px] font-medium text-[#1A242D] w-[47%] text-right">
          {estimatedArrival}
        </p>
      </div>
    </div>
  );
}
