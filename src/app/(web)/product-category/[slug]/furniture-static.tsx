"use client";

import React, { useState } from "react";
import TitleContentBlock from "@/src/components/contents/title-content-block";
import HeroSection from "@/src/components/sections/hero-section";
import { Ifurniture_product } from "@/src/types/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { routes } from "@/src/lib/routes";
import { ArrowUpRight, Trash2, Check } from "lucide-react";
import SpacingLayout from "@/src/components/layouts/spacing-layout";
import TwoColumnLayout from "@/src/components/layouts/two-column-layout";
import SidebarContactForm from "@/src/components/sections/sidebar/sidebar-contact-form";
import { shouldRenderSection } from "@/src/utils/should-render-section";
import FaqSection from "@/src/components/sections/general/faq-section";
import KeywordSearch from "@/src/components/form/keyword-search";
import ProductCard from "@/src/components/cards/product/product-card";
import { FurnitureProductType } from "@/src/data/furniture_types";

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

/* ---------------------------------------------
   Small presentational helpers for Overview tab
---------------------------------------------- */

function OverviewSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      {children}
    </section>
  );
}

function PillList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm text-foreground"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function FeatureList({
  items,
}: {
  items: { id: string; name: string; description?: string }[];
}) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((feature) => (
        <li
          key={feature.id}
          className="flex items-start gap-2 rounded-lg border border-border p-3"
        >
          <Check className="mt-0.5 h-4 w-4 text-emerald-600 shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">
              {feature.name}
            </p>
            {feature.description && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {feature.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

function PriceRangeDisplay({
  minimum,
  maximum,
  currency,
}: {
  minimum: number;
  maximum: number;
  currency: string;
}) {
  const format = (value: number) =>
    new Intl.NumberFormat("en-IN").format(value);
  return (
    <p className="text-base text-foreground">
      <span className="font-semibold">
        {currency} {format(minimum)}
      </span>
      <span className="mx-2 text-muted-foreground">–</span>
      <span className="font-semibold">
        {currency} {format(maximum)}
      </span>
    </p>
  );
}

export default function FurnitureCategoryStatic({
  searchParams,
  data,
  products,
  tab,
}: Props) {
  const [activeTab, setActiveTab] = useState(tab);

  const keyword =
    typeof searchParams.keyword === "string" ? searchParams.keyword : "";
  const query = keyword.toLowerCase();

  const filteredProducts = query
    ? products.filter((product) => product.name.toLowerCase().includes(query))
    : products;

  // Look up the professional furniture category data by slug (productType)
  const category = FurnitureProductType.find(
    (item) => item.slug.toLowerCase() === data.productType.toLowerCase(),
  );

  const tabRenderer = () => {
    switch (activeTab) {
      /* -------------------------------------
         OVERVIEW TAB
      -------------------------------------- */
      case "overview":
        return (
          <>
            <TitleContentBlock
              title={category?.name ?? data.name}
              description={category?.subtitle ?? data.subtitle}
            />

            {category?.description && (
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {category.description}
              </p>
            )}

            {category?.price_range && (
              <OverviewSection title="Price Range">
                <PriceRangeDisplay
                  minimum={category.price_range.minimum}
                  maximum={category.price_range.maximum}
                  currency={category.price_range.currency}
                />
              </OverviewSection>
            )}

            {category?.available_types &&
              category.available_types.length > 0 && (
                <OverviewSection title="Available Types">
                  <PillList items={category.available_types} />
                </OverviewSection>
              )}

            {category?.material_types && category.material_types.length > 0 && (
              <OverviewSection title="Material Options">
                <PillList items={category.material_types} />
              </OverviewSection>
            )}

            {category?.usage_areas && category.usage_areas.length > 0 && (
              <OverviewSection title="Usage Areas">
                <PillList items={category.usage_areas} />
              </OverviewSection>
            )}

            {category?.suitable_for && category.suitable_for.length > 0 && (
              <OverviewSection title="Suitable For">
                <PillList items={category.suitable_for} />
              </OverviewSection>
            )}

            {category?.size_options && category.size_options.length > 0 && (
              <OverviewSection title="Size Options">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.size_options.map((size) => (
                    <div
                      key={size.code}
                      className="rounded-lg border border-border p-4"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-foreground">
                          {size.name}
                        </p>
                        {size.is_default && (
                          <span className="text-[10px] uppercase tracking-wide text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {size.dimensions.length ?? "-"} ×{" "}
                        {size.dimensions.width ?? "-"} ×{" "}
                        {size.dimensions.height ?? "-"}{" "}
                        {size.dimensions.unit.code}
                      </p>
                      {size.description && (
                        <p className="mt-2 text-xs text-muted-foreground">
                          {size.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </OverviewSection>
            )}

            {category?.color_options && category.color_options.length > 0 && (
              <OverviewSection title="Colour Options">
                <div className="flex flex-wrap gap-4">
                  {category.color_options.map((color) => (
                    <div
                      key={color.id}
                      className="flex items-center gap-2"
                      title={color.name}
                    >
                      <span
                        className="h-6 w-6 rounded-full border border-border shadow-sm"
                        style={{
                          backgroundColor: color.color_code ?? "#ffffff",
                        }}
                      />
                      <span className="text-sm text-foreground">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              </OverviewSection>
            )}

            {category?.capacity_options &&
              category.capacity_options.length > 0 && (
                <OverviewSection title="Capacity Options">
                  <ul className="space-y-1">
                    {category.capacity_options.map((cap, idx) => (
                      <li
                        key={`${cap.name}-${idx}`}
                        className="text-sm text-foreground"
                      >
                        <span className="font-medium">{cap.name}:</span>{" "}
                        {cap.value} {cap.unit}
                        {cap.description ? ` — ${cap.description}` : ""}
                      </li>
                    ))}
                  </ul>
                </OverviewSection>
              )}

            {category?.features && category.features.length > 0 && (
              <OverviewSection title="Key Features">
                <FeatureList items={category.features} />
              </OverviewSection>
            )}

            {category?.warranty?.available && (
              <OverviewSection title="Warranty">
                <p className="text-sm text-foreground">
                  {category.warranty.duration} {category.warranty.unit}
                  {category.warranty.duration && category.warranty.duration > 1
                    ? "s"
                    : ""}{" "}
                  — {category.warranty.description}
                </p>
              </OverviewSection>
            )}

            {category?.care_instructions &&
              category.care_instructions.length > 0 && (
                <OverviewSection title="Care Instructions">
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {category.care_instructions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </OverviewSection>
              )}

            <OverviewSection title="Customization & Ordering">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  <span className="font-medium text-foreground">
                    Customizable:
                  </span>{" "}
                  {category?.customizable ? "Yes" : "No"}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Made to Order:
                  </span>{" "}
                  {category?.made_to_order ? "Yes" : "No"}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Assembly Required:
                  </span>{" "}
                  {category?.assembly_required ? "Yes" : "No"}
                </li>
              </ul>
            </OverviewSection>
          </>
        );

      /* -------------------------------------
         DETAILS / PRODUCT ITEMS TAB
      -------------------------------------- */
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
                <KeywordSearch
                  redirectRoute={`${routes.furniture}/${data.productType.toLowerCase()}`}
                />

                {query.length > 0 && (
                  <Link
                    href={`${routes.furniture}/${data.productType.toLowerCase()}#results`}
                  >
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
                    slug={product.slug}
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

        {shouldRenderSection(data.faqs) && <FaqSection data={data.faqs!} />}
      </SpacingLayout>
    </>
  );
}
