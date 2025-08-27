"use client";

import { useCheckout } from "@/hooks/useCheckout";

export default function CheckoutForm() {
  const { 
    customerInfo, 
    paymentInfo, 
    billingSameAsShipping,
    setCustomer,
    setPayment,
    setBillingSame,
    updateCustomer,
    updatePayment
  } = useCheckout();

  const handleInputChange = (field: string, value: string | boolean) => {
    if (field === 'billingSameAsShipping') {
      setBillingSame(value as boolean);
    } else if (['cardNumber', 'expiryMonth', 'expiryYear', 'cvc'].includes(field)) {
      // Handle payment info updates
      if (!paymentInfo) {
        setPayment({
          cardNumber: '',
          expiryMonth: '',
          expiryYear: '',
          cvc: ''
        });
      }
      updatePayment({ [field]: value as string });
    } else {
      // Handle customer info updates
      if (!customerInfo) {
        setCustomer({
          email: '',
          mobileNumber: '',
          firstName: '',
          lastName: '',
          address: '',
          apartment: '',
          city: '',
          country: 'Bahrain',
          zipCode: ''
        });
      }
      updateCustomer({ [field]: value as string });
    }
  };

  return (
    <div className="space-y-8 max-w-[800px]">
      {/* Contact Information */}
      <div>
        <h2 className="text-[16px] lg:text-[18px] font-semibold text-[#1A242D] mb-6">
          Contact information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              id="email"
              value={customerInfo?.email || ""}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="text-[14px] text-gray-600 w-full px-3 py-2 border border-[#CCD0D4] rounded-[8px] focus:outline-none focus:ring-[#A00D23] focus:border-[#A00D23] min-h-[48px]"
              placeholder="Email"
            />
          </div>

          <div>
            <div className="flex">
              <select
                defaultValue="+973"
                className="w-[72px] text-[13px] text-gray-600 px-2 border border-[#CCD0D4] border-r-0 rounded-tr-none rounded-br-none rounded-[8px] min-h-[48px] focus:outline-none focus:border-[#CCD0D4]"
              >
                <option value="+973">+973</option>
                <option value="+966">+966</option>
                <option value="+971">+971</option>
                <option value="+965">+965</option>
              </select>
              <input
                type="tel"
                id="mobile"
                value={customerInfo?.mobileNumber || ""}
                onChange={(e) =>
                  handleInputChange("mobileNumber", e.target.value)
                }
                className="w-[calc(100%-72px)] text-[14px] text-gray-600 px-3 py-2 border border-[#CCD0D4] border-l-0 rounded-tl-none rounded-bl-none rounded-[8px] focus:outline-none focus:ring-[#A00D23] focus:border-[#A00D23] min-h-[48px]"
                placeholder="Enter mobile number"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div>
        <h2 className="text-[16px] lg:text-[18px] font-semibold text-[#1A242D] mb-6">
          Shipping address
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                id="firstName"
                value={customerInfo?.firstName || ""}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="text-[14px] text-gray-600 w-full px-3 py-2 border border-[#CCD0D4] rounded-[8px] focus:outline-none focus:ring-[#A00D23] focus:border-[#A00D23] min-h-[48px]"
                placeholder="First name"
              />
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                value={customerInfo?.lastName || ""}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="text-[14px] text-gray-600 w-full px-3 py-2 border border-[#CCD0D4] rounded-[8px] focus:outline-none focus:ring-[#A00D23] focus:border-[#A00D23] min-h-[48px]"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              id="address"
              value={customerInfo?.address || ""}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="text-[14px] text-gray-600 w-full px-3 py-2 border border-[#CCD0D4] rounded-[8px] focus:outline-none focus:ring-[#A00D23] focus:border-[#A00D23] min-h-[48px]"
              placeholder="Address"
            />
          </div>

          <div>
            <input
              type="text"
              id="apartment"
              value={customerInfo?.apartment || ""}
              onChange={(e) => handleInputChange("apartment", e.target.value)}
              className="text-[14px] text-gray-600 w-full px-3 py-2 border border-[#CCD0D4] rounded-[8px] focus:outline-none focus:ring-[#A00D23] focus:border-[#A00D23] min-h-[48px]"
              placeholder="Apartment or suite number"
            />
          </div>

          <div>
            <input
              type="text"
              id="city"
              value={customerInfo?.city || ""}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="text-[14px] text-gray-600 w-full px-3 py-2 border border-[#CCD0D4] rounded-[8px] focus:outline-none focus:ring-[#A00D23] focus:border-[#A00D23] min-h-[48px]"
              placeholder="City"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <select
                id="country"
                value={customerInfo?.country || "Bahrain"}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="text-[14px] text-gray-600 w-full px-3 py-2 border border-[#CCD0D4] rounded-[8px] focus:outline-none focus:ring-[#A00D23] focus:border-[#A00D23] min-h-[48px]"
              >
                <option value="Bahrain">Bahrain</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="UAE">UAE</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Oman">Oman</option>
                <option value="Qatar">Qatar</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                id="zipCode"
                value={customerInfo?.zipCode || ""}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                className="text-[14px] text-gray-600 w-full px-3 py-2 border border-[#CCD0D4] rounded-[8px] focus:outline-none focus:ring-[#A00D23] focus:border-[#A00D23] min-h-[48px]"
                placeholder="Zip code"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="billingSame"
              checked={billingSameAsShipping}
              onChange={(e) =>
                handleInputChange("billingSameAsShipping", e.target.checked)
              }
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />
            <label
              htmlFor="billingSame"
              className="ml-2 block text-sm text-gray-700"
            >
              Billing address is same as shipping address
            </label>
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div>
        <h2 className="text-[16px] lg:text-[18px] font-semibold text-[#1A242D] mb-6">
          Payment details
        </h2>
        <div className="space-y-4">
          <div>
            <div className="relative">
              <input
                type="text"
                id="cardNumber"
                value={paymentInfo?.cardNumber || ""}
                onChange={(e) =>
                  handleInputChange("cardNumber", e.target.value)
                }
                className="text-[14px] text-gray-600 w-full px-3 py-2 border border-[#CCD0D4] rounded-[8px] focus:outline-none focus:ring-[#A00D23] focus:border-[#A00D23] min-h-[48px]"
                placeholder="Card number"
                maxLength={19}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                id="expiry"
                value={(paymentInfo?.expiryMonth || "") + "/" + (paymentInfo?.expiryYear || "")}
                onChange={(e) => {
                  const value = e.target.value.replace("/", "");
                  if (value.length <= 4) {
                    const month = value.slice(0, 2);
                    const year = value.slice(2, 4);
                    handleInputChange("expiryMonth", month);
                    handleInputChange("expiryYear", year);
                  }
                }}
                className="text-[14px] text-gray-600 w-full px-3 py-2 border border-[#CCD0D4] rounded-[8px] focus:outline-none focus:ring-[#A00D23] focus:border-[#A00D23] min-h-[48px]"
                placeholder="MM/YY"
                maxLength={5}
              />
            </div>
            <div>
              <input
                type="text"
                id="cvc"
                value={paymentInfo?.cvc || ""}
                onChange={(e) => handleInputChange("cvc", e.target.value)}
                className="text-[14px] text-gray-600 w-full px-3 py-2 border border-[#CCD0D4] rounded-[8px] focus:outline-none focus:ring-[#A00D23] focus:border-[#A00D23] min-h-[48px]"
                placeholder="CVC"
                maxLength={4}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
