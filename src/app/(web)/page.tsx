import SpacingLayout from "@/src/components/layouts/spacing-layout";
import HeroSection from "@/src/components/sections/hero-section";
import { homepageData } from "@/src/data/home_page";
import { shouldRenderSection } from "@/src/utils/should-render-section";
import { furniture_product } from "@/src/data/furniture_product";
import TopProductSection from "@/src/components/sections/top-product-section";
import ProductCategorySection from "@/src/components/sections/product-category-section";

function Page() {
  const hero = homepageData[0];
  const topProducts = furniture_product;
  const productCategories = furniture_product;

  return (
    <>
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        video_url={hero.video_url}
      >
        <div className="absolute z-50 p-3 -translate-x-1/2 left-1/2 w-full -bottom-1/3 sm:bottom-0" />
      </HeroSection>
      <div className="my-52 sm:my-16"></div>
      <SpacingLayout>
        {shouldRenderSection(topProducts) && (
          <TopProductSection
            subtitle="Featured Collection"
            title="Top Products"
            description="Explore our most popular furniture pieces."
            data={topProducts}
          />
        )}
        {shouldRenderSection(productCategories) && (
          <ProductCategorySection
            subtitle="Find Your Style"
            title="Explore Our Collections"
            description="Discover thoughtfully designed furniture for every room, crafted to bring comfort, style, and character to your space. From timeless classics to modern statement pieces, explore our carefully selected collections made to complement your lifestyle and transform your home into a space you truly love."
            data={productCategories}
          />
        )}
      </SpacingLayout>
    </>
  );
}

export default Page;
