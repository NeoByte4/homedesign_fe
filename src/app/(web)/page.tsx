import SpacingLayout from "@/src/components/layouts/spacing-layout";
import HeroSection from "@/src/components/sections/hero-section";
import { homepageData } from "@/src/data/home_page";
import { shouldRenderSection } from "@/src/utils/should-render-section";
import { furniture_product } from "@/src/data/furniture_product";
import TopProductSection from "@/src/components/sections/top-product-section";
import ProductCategorySection from "@/src/components/sections/product-category-section";
import ProductListSection from "@/src/components/sections/product-list-section";
import RotateProduct from "@/src/components/sections/rotate-product";
import BrandShowcase from "@/src/components/sections/brand-showcase";
import SiteReviewSection from "@/src/components/sections/reviews/site-reviews-seciton";
import NewsletterSection from "@/src/components/sections/newsletter/newsletter-section";

function Page() {
  const hero = homepageData[0];
  const topProducts = furniture_product;
  const productCategories = furniture_product;
  const productlist = furniture_product;
  const rotateProductData = furniture_product;
  const brandShowcaseData = furniture_product;

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
        {shouldRenderSection(productlist) && (
          <ProductListSection
            subtitle="Discover More"
            title="Our Furniture Collection"
            description="Explore our curated selection of furniture, designed to elevate your living spaces with style and functionality. From timeless classics to modern statement pieces, find the perfect addition to your home."
            morePlansUrl="/products"
            morePlansLabel="See More Products"
            data={productlist}
          />
        )}

        {shouldRenderSection(rotateProductData) && (
          <RotateProduct
            subtitle={rotateProductData[0].subtitle}
            title={rotateProductData[0].name}
            image={rotateProductData[0].images_url[0].url}
            description={
              <>
                We are an Australian-owned travel wholesaler with over 20 years
                of experience in Mediterranean travel. We create tailor-made
                packages, from private tours and honeymoons to family holidays,
                leisure getaways, and corporate trips.
                <br />
                <br />
                Our services cover everything—accommodation, transfers, ferry
                and train tickets, guided tours, and unique local experiences.
              </>
            }
          />
        )}

        {shouldRenderSection(brandShowcaseData) && (
          <BrandShowcase
            title="Our Trusted Brands"
            subtitle=" Discover the brands that define our commitment to quality and style."
            brands={brandShowcaseData.map((product) => ({
              id: product.id,
              name: product.name,
              slug: product.id,
              image: product.images_url[0].url,
            }))}
            disclaimer="Some exclusions apply."
            disclaimerLinkLabel="Click here"
            // disclaimerLinkHref="/brands"
          />
        )}
      </SpacingLayout>
      <SiteReviewSection />
      <NewsletterSection />
    </>
  );
}

export default Page;
