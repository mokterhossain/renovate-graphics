import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import ServicesIntroSection from "./components/ServicesIntroSection";
import PhotoUploadSection from "./components/PhotoUploadSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSlider />
      <ServicesIntroSection />
      <PhotoUploadSection />
      <ServicesSection />
    </div>
  );
}
