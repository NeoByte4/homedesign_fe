import HeroSection from "../components/sections/hero-section";
import { homepageData } from "@/src/data/home_page";

function Page() {
  const hero = homepageData[0];

  return (
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        video_url={hero.video_url}
    >
      <div className="absolute z-50 p-3 -translate-x-1/2 left-1/2 w-full -bottom-1/3 sm:bottom-0" />
    </HeroSection>
  );
}

export default Page;
