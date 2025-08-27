export default function Footer() {
  return (
    <footer className="bg-[#EBEBEB]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <div className="lg:col-span-2">
            {/* Newsletter Subscription */}
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/images/betelco-logo.png"
                  className="w-[140px] lg:w-[190px]"
                  alt="betelco-logo"
                />
              </div>
              <h4 className="text-[18px] xl:text-[20px] font-[700] mb-2 text-[#262626]">
                Subscribe to our newsletter
              </h4>
              <p className="text-gray-400 mb-4">
                Get the latest updates and exclusive offers
              </p>
              <div className="flex items-center footer-search">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {/* Business Solutions */}
          <div>
            <h4 className="text-[18px] xl:text-[20px] font-[700] mb-2 text-[#262626]">
              Business Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  Mobile for Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  Business Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  Connectivity
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  Cloud & eCommerce
                </a>
              </li>
            </ul>
          </div>

          {/* Global Solutions */}
          <div>
            <h4 className="text-[18px] xl:text-[20px] font-[700] mb-2 text-[#262626]">
              Global Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  Global Connectivity
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  Internet Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  Cloud connect
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  Hosting Services
                </a>
              </li>
            </ul>
          </div>

          {/* Help and Support */}
          <div>
            <h4 className="text-[18px] xl:text-[20px] font-[700] mb-2 text-[#262626]">
              Help and Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  eServices Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h4 className="text-[18px] xl:text-[20px] font-[700] mb-2 text-[#262626]">
              Help and Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  News Centre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#262626] transition-colors text-[14px] xl:text-[16px] font-medium"
                >
                  Sponsorship
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Address Bar */}
      <div className="mt-6 py-6 text-center bg-[#1C242C]">
        <p className="text-white text-[13px] font-semibold">
          ADDRESS: BUILDING 1095, ROAD 1425, BLOCK 1014, HAMALA BAHRAIN -
          P.O.BOX 14
        </p>
      </div>
    </footer>
  );
}
