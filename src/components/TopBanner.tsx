export default function TopBanner() {
  return (
    <section className="relative h-[70vh] xl:h-[70vh]">
      <img
        src="/images/main-banner.jpg"
        className="w-full h-full object-cover object-center lg:object-right-top hidden md:block"
        alt="banner"
      />
      <img
        src="/images/main-banner-mobile.jpg"
        className="w-full h-full object-cover object-center block md:hidden"
        alt="banner"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-wrap items-start md:items-center bg-[#00000075] xl:bg-[unset]">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-left">
            <h1 className="mb-6">
              <span className="text-[60px] lg:text-[72px] xl:text-[100px] font-[900] leading-[40px] text-white">
                Jawaher
              </span>
              <br />{" "}
              <span className="text-[24px] lg:text-[36px] xl:text-[40px] font-[900] text-white block ml-[6%] mt-[-5px]">
                Loyalty Program
              </span>
            </h1>
            <p className="text-[16px] lg:text-[20px] mb-8 max-w-lg font-[300] text-white leading-loose">
              A new world of exceptional rewards and benefits. Redeem your
              points through the Batelco app
            </p>
            <button
              className="cursor-pointer bg-white min-h-[48px] flex items-center shadow-lg justify-center text-[#A00D23] px-8 py-3 min-w-[144px] rounded-[12px] text-[16px] font-[700] transition-colors transform hover:scale-105 leading-0"
              style={{ boxShadow: "0 9px 15px 6px #00000036" }}
            >
              <span className="relative top-[2px]">More info</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
