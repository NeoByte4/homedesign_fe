"use client";

import React, { useState } from "react";
import TitleContentBlock from "@/src/components/contents/title-content-block";
import HeroSection from "@/src/components/sections/hero-section";
import { Ifurniture_product } from "@/src/types/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { routes } from "@/src/lib/routes";
import { ArrowUpRight, Trash2 } from "lucide-react";
import SpacingLayout from "@/src/components/layouts/spacing-layout";
import TwoColumnLayout from "@/src/components/layouts/two-column-layout";
import SidebarContactForm from "@/src/components/sections/sidebar/sidebar-contact-form";
import { shouldRenderSection } from "@/src/utils/should-render-section";
import FaqSection from "@/src/components/sections/general/faq-section";
import KeywordSearch from "@/src/components/form/keyword-search";
import ProductCard from "@/src/components/cards/product/product-card";

type Props = {
  data: Ifurniture_product;
  products: Ifurniture_product[];
  tab: string;
  slug: string;
  searchParams: Record<string, string | string[] | undefined>;
};

const tabs = [
  { key: "details", title: "Product Items" },
  { key: "overview", title: "Overview" },
];

export default function FurnitureStatic({
  searchParams,
  data,
  products,
}: Props) {
  const [activeTab, setActiveTab] = useState("details");
  const keyword =
    typeof searchParams.keyword === "string" ? searchParams.keyword : "";
  const query = keyword.toLowerCase();
  const filteredProducts = query
    ? products.filter((product) => product.name.toLowerCase().includes(query))
    : products;

  const tabRenderer = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <TitleContentBlock title={data.name} description={data.subtitle} />
          </>
        );

      case "details":
      default:
        return (
          <>
            <TitleContentBlock
              title="Product Details"
              description={`Everything you need to know about ${data.name}.`}
            />

            <div className="flex items-center gap-2 justify-between mb-6 mt-6">
              <div className="w-full max-w-sm flex items-center gap-2">
                <KeywordSearch redirectRoute={routes.products} />

                {query.length > 0 && (
                  <Link href={`${routes.products}#results`}>
                    <Button variant="destructive" className="h-10 w-10 p-0">
                      <Trash2 size={18} />
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            <div id="results" />

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 gap-y-12 mt-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    category={product.category}
                    subtitle={product.subtitle}
                    image={product.images_url?.[0]?.url ?? ""}
                    rating={product.rating}
                    slug={product.id}
                    discount={product.discount}
                    price={product.price}
                    price_range={product.price_range}
                    isPopular={false}
                    inclusion_icons={product.inclusion_icons}
                  />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">
                No furniture products matching your query.
              </p>
            )}
          </>
        );
    }
  };

  return (
    <>
      <HeroSection
        image_url={data.images_url?.[0]?.url}
        title={data.name}
        subtitle={data.subtitle}
      >
        <section className="absolute z-50 w-full md:h-20 bottom-0 bg-black/30 backdrop-blur-sm rounded-lg flex items-center justify-center overflow-hidden">
          <div id="results" />

          <div className="flex-1 h-full gap-2 flex flex-wrap items-center justify-center md:justify-start p-2">
            {tabs.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveTab(item.key)}
                className={`font-medium text-base h-full px-6 py-4 rounded-lg flex items-center justify-center text-white transition-all ${
                  activeTab === item.key
                    ? "bg-white/20 text-white"
                    : "hover:bg-white/10"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex gap-4 items-center px-6 justify-center">
            <Link href={routes.contact}>
              <Button size="lg" variant="default-blue">
                Contact us
                <ArrowUpRight />
              </Button>
            </Link>
          </div>
        </section>
      </HeroSection>

      <SpacingLayout className="mt-10">
        <TwoColumnLayout sidebar={<SidebarContactForm />}>
          {tabRenderer()}
        </TwoColumnLayout>

        {shouldRenderSection(data.faqs) && <FaqSection data={data.faqs} />}
      </SpacingLayout>
    </>
  );
}
