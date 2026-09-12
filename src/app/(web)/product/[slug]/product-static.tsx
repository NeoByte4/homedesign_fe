"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/src/lib/routes";
import { ArrowUpRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/src/components/sections/hero-section";
import FaqSection from "@/src/components/sections/general/faq-section";
import SiteReviewSection from "@/src/components/sections/reviews/site-reviews-seciton";
import NewsletterSection from "@/src/components/sections/newsletter/newsletter-section";

import TitleContentBlock from "@/src/components/contents/title-content-block";
import SpacingLayout from "@/src/components/layouts/spacing-layout";

import TwoColumnLayout from "@/src/components/layouts/two-column-layout";
import ErrorTextSection from "@/src/components/notifiers/error-text-section";
import ServicesIcon from "@/src/components/primitives/services-icons-list";
import { Ifurniture_product } from "@/src/types/types";
import { shouldRenderSection } from "@/src/utils/should-render-section";
import ContentSection from "@/src/components/sections/contents/content-section";

const ProductStatic = ({ product }: { product: Ifurniture_product }) => {
  const shouldShowDiscount = product.discount != null && product.discount > 0;
  const heroImage = product.images_url?.[0]?.url ?? "/placeholder.jpg";

  const netPrice =
    product.price != null
      ? product.price - (product.price * (product.discount ?? 0)) / 100
      : undefined;

  return (
    <>
      <HeroSection height="medium" image_url={heroImage} title={product.name}>
        <section className="absolute z-50 w-full h-20 bottom-0 bg-bg/30 backdrop-blur-xs rounded-lg overflow-hidden">
          <div className="h-full flex items-center justify-between">
            <div className="pl-3 md:pl-6 text-bg">
              <span className="text-xs md:text-sm">
                {shouldShowDiscount ? "Special Price" : "Price"}
              </span>
              <div className="flex items-baseline gap-2">
                <h4 className="text-xl md:text-3xl font-medium">
                  {netPrice != null
                    ? `${netPrice.toFixed(2)} RS`
                    : product.price_range}
                </h4>

                {shouldShowDiscount && product.price != null && (
                  <span className="text-base md:text-lg text-muted">
                    <span className="line-through">
                      {product.price.toFixed(2)} RS
                    </span>
                  </span>
                )}
              </div>
            </div>

            <div className="hidden lg:flex gap-4 items-center px-6 justify-center">
              <Button type="button" variant="default-blue" size="lg">
                Add to Cart
                <ShoppingCart />
              </Button>

              <Link href={routes.contact}>
                <Button size="lg" className="text-base">
                  Contact us
                  <ArrowUpRight />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </HeroSection>

      <SpacingLayout>
        <TwoColumnLayout
          className="mt-10"
          sidebar={
            <div className="space-y-6 border rounded-lg p-4">
              <div className="overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src={heroImage}
                  width={500}
                  height={500}
                  alt={`Image for ${product.name}`}
                  className="w-full h-full object-cover"
                  quality={75}
                />
              </div>

              <div className="flex flex-wrap gap-1">
                {product.category?.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border px-3 py-1 text-xs capitalize"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {product.color && product.color.length > 0 && (
                <div>
                  <p className="text-sm font-semibold mb-2">Available Colors</p>
                  <div className="flex gap-2">
                    {product.color.map((c) => (
                      <span
                        key={c.id}
                        title={c.name}
                        className="w-6 h-6 rounded-full border"
                        style={{ backgroundColor: c.color_code }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center flex-wrap gap-1 text-text-secondary">
                <ServicesIcon inclusion_icons={product.inclusion_icons} />
              </div>

              <Button type="button" variant="default-blue" className="w-full">
                Add to Cart
                <ShoppingCart />
              </Button>
            </div>
          }
        >
          <ContentSection
            title="Product Overview"
            text={product.subtitle}
            htmlContent={product.description_content}
          />

          {shouldRenderSection(product.dimensions) && (
            <div className="mt-8">
              <TitleContentBlock title="Dimensions" description="" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {product.dimensions?.map((dim, idx) => (
                  <div key={idx} className="border rounded-lg p-3 text-sm">
                    {dim.name && (
                      <p className="font-semibold mb-1">{dim.name}</p>
                    )}

                    {dim.width != null &&
                      dim.depth != null &&
                      dim.height != null && (
                        <p>
                          W {dim.width}
                          {dim.unit?.code} × D {dim.depth}
                          {dim.unit?.code} × H {dim.height}
                          {dim.unit?.code}
                        </p>
                      )}

                    {dim.seat_width != null && (
                      <p className="text-text-secondary">
                        Seat: W {dim.seat_width}
                        {dim.unit?.code} × D {dim.seat_depth}
                        {dim.unit?.code} × H {dim.seat_height}
                        {dim.unit?.code}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </TwoColumnLayout>

        {shouldRenderSection(product.faqs) ? (
          <FaqSection
            data={product.faqs!.map((faq) => ({
              title: faq.title,
              description: faq.description,
            }))}
          />
        ) : (
          <ErrorTextSection item="FAQs" parent="product" />
        )}

        <SiteReviewSection />
        <NewsletterSection />
      </SpacingLayout>
    </>
  );
};

export default ProductStatic;
