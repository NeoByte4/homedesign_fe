import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Ifurniture_product } from "@/src/types/types";
import { furniture_product } from "@/src/data/furniture_product";
import HeroSection from "@/src/components/sections/hero-section";
import SpacingLayout from "@/src/components/layouts/spacing-layout";
import SidebarContactForm from "@/src/components/sections/sidebar/sidebar-contact-form";
import TwoColumnLayout from "@/src/components/layouts/two-column-layout";
import TitleContentBlock from "@/src/components/contents/title-content-block";
import KeywordSearch from "@/src/components/form/keyword-search";
import { routes } from "@/src/lib/routes";
import { Button } from "@/components/ui/button";
import FurnitureProductCard from "@/src/components/cards/product/product-card";
import ErrorTextSection from "@/src/components/notifiers/error-text-section";
import SiteReviewSection from "@/src/components/sections/reviews/site-reviews-seciton";
import NewsletterSection from "@/src/components/sections/newsletter/newsletter-section";
import { ProductPageBannerData } from "@/src/data/banner-data";

type SearchParams = {
  category?: string;
  productType?: string;
  minPrice?: string;
  maxPrice?: string;
  keyword?: string;
};

const Page = async ({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const searchParams = await searchParamsPromise;
  let products: Ifurniture_product[] = [...furniture_product];

  if (searchParams.keyword) {
    const keyword = searchParams.keyword.toLowerCase().trim();

    products = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(keyword) ||
        product.subtitle?.toLowerCase().includes(keyword) ||
        product.productType?.toLowerCase().includes(keyword) ||
        product.category?.some((category) =>
          category.toLowerCase().includes(keyword),
        )
      );
    });
  }

  if (searchParams.category) {
    const category = searchParams.category.toLowerCase();

    products = products.filter((product) =>
      product.category?.some((item) => item.toLowerCase() === category),
    );
  }

  if (searchParams.productType) {
    const productType = searchParams.productType.toLowerCase();

    products = products.filter(
      (product) => product.productType?.toLowerCase() === productType,
    );
  }

  if (searchParams.minPrice) {
    const minPrice = Number(searchParams.minPrice);

    products = products.filter(
      (product) => product.price !== undefined && product.price >= minPrice,
    );
  }

  if (searchParams.maxPrice) {
    const maxPrice = Number(searchParams.maxPrice);

    products = products.filter(
      (product) => product.price !== undefined && product.price <= maxPrice,
    );
  }

  const banner_data = ProductPageBannerData[0];

  return (
    <>
      <HeroSection
        height="large"
        title={banner_data.title}
        subtitle={banner_data.subtitle}
        image_url={banner_data?.image_url}
        video_url={banner_data?.video_url}
      />

      <SpacingLayout id="results" className="mt-16">
        <TwoColumnLayout sidebar={<SidebarContactForm />}>
          <TitleContentBlock
            title="Our Furniture Collection"
            description="Explore our collection of carefully crafted furniture for living rooms, bedrooms, dining spaces, offices, and more."
          />

          <div className="flex items-center gap-2 justify-between mb-6 mt-6">
            <div className="w-full max-w-sm flex items-center gap-2">
              <KeywordSearch redirectRoute={routes.furniture} />

              {searchParams.keyword && (
                <Link href={`${routes.products}#results`}>
                  <Button variant="destructive" size="icon">
                    <Trash2 />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {products.length > 0 ? (
            <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-12 items-stretch ">
              {products.map((product: Ifurniture_product) => (
                <FurnitureProductCard
                  key={product.id}
                  image={product.images_url?.[0]?.url ?? "/placeholder.jpg"}
                  name={product.name}
                  subtitle={product.subtitle}
                  rating={product.rating}
                  slug={product.slug}
                  discount={product.discount}
                  price={product.price}
                  category={product.category}
                  price_range={product.price_range}
                  inclusion_icons={product.inclusion_icons}
                />
              ))}
            </section>
          ) : (
            <ErrorTextSection customMsg="No furniture products matching this query." />
          )}
        </TwoColumnLayout>

        <SiteReviewSection />

        <NewsletterSection />
      </SpacingLayout>
    </>
  );
};

export default Page;
