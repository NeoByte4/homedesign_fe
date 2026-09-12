import { Button } from "@/components/ui/button";
import ProductCategoryCard from "@/src/components/cards/category/product-category-card";
import TitleContentBlock from "@/src/components/contents/title-content-block";
import GlobalProductSearch from "@/src/components/form/global-furniture-search";
import KeywordSearch from "@/src/components/form/keyword-search";
import ContainerLayout from "@/src/components/layouts/container-layout";
import SpacingLayout from "@/src/components/layouts/spacing-layout";
import ErrorTextSection from "@/src/components/notifiers/error-text-section";
import HeroSection from "@/src/components/sections/hero-section";
import { productBannerData } from "@/src/data/banner-data";
import { FurnitureProductType } from "@/src/data/furniture_types";

import { routes } from "@/src/lib/routes";
import { IFurnitureProductType } from "@/src/types/types";
import { Trash2 } from "lucide-react";
import Link from "next/link";

const banner_data = productBannerData[0];

interface PageProps {
  searchParams: Promise<{
    keyword?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { keyword } = await searchParams;

  const query = keyword?.toLowerCase() ?? "";

  const filteredProducts = FurnitureProductType.filter((product) => {
    if (!product.is_active) return false;
    if (!query) return true;
    return product.name.toLowerCase().includes(query);
  }).sort((a, b) => a.sort_order - b.sort_order);

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

      <div id="results" />
      <SpacingLayout className="mt-48 sm:mt-10">
        <ContainerLayout>
          <div className="md:max-w-3xl mb-8">
            <TitleContentBlock
              title="Browse Our Categories"
              description="From cozy sofas to functional desks, explore our full range of furniture categories crafted for every room in your home."
            />
          </div>
          <div className="w-full max-w-sm mb-3 flex items-center gap-2">
            <div className="h-10 flex-1">
              <KeywordSearch redirectRoute={routes.furniture} />
            </div>

            {query && query.length > 0 && (
              <Link href={`${routes.furniture}#results`}>
                <Button variant="destructive" className="h-10 w-10 p-0">
                  <Trash2 size={18} />
                </Button>
              </Link>
            )}
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredProducts.map(
                (product: IFurnitureProductType, i: number) => (
                  <div
                    key={product.id}
                    className={`w-full aspect-square max-h-96 ${
                      (i + 1) % 3 === 0 && "md:col-span-2 lg:col-span-1"
                    }`}
                  >
                    <ProductCategoryCard
                      name={product.name}
                      image={
                        product.thumbnail_image?.url ??
                        product.banner_images?.[0]?.url ??
                        ""
                      }
                      href={`${routes.furniture}/${product.slug}`}
                    />
                  </div>
                ),
              )}
            </div>
          ) : (
            <ErrorTextSection customMsg="No category matching your query" />
          )}
        </ContainerLayout>
      </SpacingLayout>
    </>
  );
}
