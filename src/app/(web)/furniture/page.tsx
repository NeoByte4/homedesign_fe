import GlobalProductSearch from "@/src/components/form/global-furniture-search";
import HeroSection from "@/src/components/sections/hero-section";
import { productBannerData } from "@/src/data/banner-data";

const banner_data = productBannerData[0];

export default function Page() {
  return (
    <>
      <HeroSection
        height="large"
        title={banner_data.title}
        subtitle={banner_data.subtitle}
        image_url={banner_data?.image_url}
        video_url={banner_data?.video_url}
      >
        <div className="absolute z-50 p-3 -translate-x-1/2 left-1/2 w-full -bottom-1/3 sm:bottom-0">
          <GlobalProductSearch />
        </div>
      </HeroSection>
    </>
  );
}
