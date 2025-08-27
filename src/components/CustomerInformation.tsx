interface CustomerInformationProps {
  customerName: string;
  email: string;
  mobileNumber: string;
  shippingAddress: string;
}

export default function CustomerInformation({
  customerName,
  email,
  mobileNumber,
  shippingAddress,
}: CustomerInformationProps) {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-4 py-4 border-t-1 border-gray-200">
        <p className="text-[14px] lg:text-[16px] font-[700] text-[#1A242D] w-[47%]">
          Customer Name
        </p>
        <p className="text-[14px] lg:text-[16px] font-medium text-[#1A242D] w-[47%] text-right">
          {customerName}
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-4 py-4 border-t-1 border-gray-200">
        <p className="text-[14px] lg:text-[16px] font-[700] text-[#1A242D] w-[47%]">
          Email
        </p>
        <p className="text-[14px] lg:text-[16px] font-medium text-[#1A242D] w-[47%] text-right">
          {email}
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-4 py-4 border-t-1 border-gray-200">
        <p className="text-[14px] lg:text-[16px] font-[700] text-[#1A242D] w-[47%]">
          Mobile Number
        </p>
        <p className="text-[14px] lg:text-[16px] font-medium text-[#1A242D] w-[47%] text-right">
          {mobileNumber}
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-4 py-4 border-t-1 border-gray-200">
        <p className="text-[14px] lg:text-[16px] font-[700] text-[#1A242D] w-[47%]">
          Shipping Address
        </p>
        <p className="text-[14px] lg:text-[16px] font-medium text-[#1A242D] w-[47%] text-right">
          {shippingAddress}
        </p>
      </div>
    </div>
  );
}
