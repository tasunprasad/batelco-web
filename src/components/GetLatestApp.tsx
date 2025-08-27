export default function GetLatestApp() {
  return (
    <section className="bg-[#FFF2F2] flex flex-wrap items-center min-h-[410px] mt-8 mb-8 xl:mt-36 xl:mb-56">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Left Content - App Screenshot */}
          <div className="flex justify-center lg:justify-start relative h-full lg:w-[50%] xl:w-[670px]">
            <img
              src="/images/get-app-img.png"
              className="xl:absolute top-[-268px] left-0 w-full pt-12 xl:pt-0"
              alt="app"
            />
          </div>

          {/* Right Content - App Info and Download */}
          <div className="text-center lg:text-left lg:w-[50%] xl:w-[calc(100%-670px)] pb-12 xl:pb-0">
            <h2 className="text-[36px] lg:text-[48px] font-[800] text-[#1A242D] leading-[42px] lg:leading-[68px] mb-2 mx-w-[345px]">
              Get the latest Batelco App
            </h2>
            <p className="text-[20px] mb-6 max-w-[460px] text-[#404A52]">
              Take control of your account anytime, anywhere with the Batelco
              App
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <img
                src="/images/google-play.png"
                className="h-[36px] md:h-[52px] w-[auto]"
                alt="app store"
              />
              <img
                src="/images/app-store.png"
                className="h-[36px] md:h-[52px] w-[auto]"
                alt="app store"
              />
              <img
                src="/images/app-gallery.png"
                className="h-[36px] md:h-[52px] w-[auto]"
                alt="app store"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
