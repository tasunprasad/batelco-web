const packages = [
  {
    id: "1",
    name: "Basic",
    subtitle: "12 months contract",
    monthlyPrice: "BD9.9",
    features: [
      "12 Months Contract",
      "20 GB Data",
      "Unlimited Social Media",
      "600 Local Minutes",
    ],
  },
  {
    id: "2",
    name: "Standard",
    subtitle: "12 months contract",
    monthlyPrice: "BD14.9",
    features: [
      "12 Months Contract",
      "50 GB Data",
      "Unlimited Social Media",
      "1000 Local Minutes",
    ],
  },
  {
    id: "3",
    name: "Advanced",
    subtitle: "12 months contract",
    monthlyPrice: "BD19.9",
    features: [
      "12 Months Contract",
      "100 GB Data",
      "Unlimited Social Media",
      "1500 Local Minutes",
    ],
  },
  {
    id: "4",
    name: "Premier",
    subtitle: "12 months contract",
    monthlyPrice: "BD29.9",
    features: [
      "12 Months Contract",
      "Unlimited Data",
      "Unlimited Social Media",
      "Unlimited Local Minutes",
    ],
  },
];

export default function OurServices() {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] lg:text-[48px] font-[800] text-[#1A242D] leading-[42px] lg:leading-[68px] mb-2">
            Our popular packages
          </h2>
          <p className="text-[20px] mb-6 max-w-4xl mx-auto text-[#404A52]">
            Get the plan that&apos;s right for you, with a mobile SIM card delivered
            straight to your door.
          </p>
          <button className="cursor-pointer mx-auto text-[14px] flex justify-center items-center min-h-[48px] bg-white border-1 border-[#A00D23] text-[#A00D23] px-6 rounded-[100px] font-semibold hover:bg-[#A00D23] hover:text-white transition-colors transform">
            Explore more
          </button>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-[24px] border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Package Header */}
              <div className="px-6 pt-6">
                <h3 className="text-[24px] lg:text-[32px] font-[800] text-[#0B2110] text-center">
                  {pkg.name}
                </h3>
                <p className="text-[14px] lg:text-[16px] text-[#2E3630] text-center">
                  {pkg.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="p-6 text-center flex flex-wrap items-center justify-center">
                <div className="text-[28px] lg:text-[40px] font-[800] text-[#a00d23]">
                  {pkg.monthlyPrice}
                </div>
                <div className="text-[13px] text-[#0B2110] font-[400] pl-1">
                  monthly
                </div>
              </div>

              {/* Features */}
              <div className="px-6 pb-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-[16px] h-[16px] bg-[#262626] rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-[#FFFFFF]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-[13px] lg:text-[14px] text-[#262626]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subscribe Button */}
              <div className="p-6 pt-0">
                <button className="cursor-pointer min-h-[48px] w-full text-[15px] flex items-center justify-center py-2 px-4 rounded-[12px] font-medium transition-colors bg-[#A00D23] text-white hover:bg-[#A00D23]">
                  Subscribe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
