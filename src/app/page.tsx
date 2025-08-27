import GetLatestApp from "@/components/GetLatestApp";
import HomeServiceSlider from "@/components/HomeServiceSlider";
import OurServices from "@/components/OurServices";
import ProductSlider from "@/components/ProductSlider";
import TopBanner from "@/components/TopBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <ProductSlider />
      <HomeServiceSlider />
      <OurServices />
      <GetLatestApp />
    </main>
  );
}
