"use client";
import FaqSection from "@/src/components/sections/general/faq-section";
import SiteReviewSection from "@/src/components/sections/reviews/site-reviews-seciton";
import NewsletterSection from "@/src/components/sections/newsletter/newsletter-section";
import SpacingLayout from "@/src/components/layouts/spacing-layout";
import TwoColumnLayout from "@/src/components/layouts/two-column-layout";
import ErrorTextSection from "@/src/components/notifiers/error-text-section";
import { Ifurniture_product } from "@/src/types/types";
import { shouldRenderSection } from "@/src/utils/should-render-section";
import { useProductState } from "@/src/hooks/productg/use-product-state";
import { ProductSidebar } from "@/src/components/ui/product-sidebar";
import { ProductFeatures } from "@/src/components/sections/product-features";
import { ProductSpecifications } from "@/src/components/sections/product-specifications";
import { ProductSizeOptions } from "@/src/components/sections/product-size-options";
import { ProductCapacityOptions } from "@/src/components/sections/product-capacity-options";
import { ProductWarranty } from "@/src/components/sections/product-warranty";
import { ProductCare } from "@/src/components/sections/product-care";
import { ProductShipping } from "@/src/components/sections/product-shipping";
import { ProductVideo } from "@/src/components/sections/product-video";
import HeroSection from "@/src/components/sections/hero-section";
import ContentSection from "@/src/components/sections/contents/content-section";
import Dimension3DimageSection from "@/src/components/sections/product/dimension-3dimage-section";
import ProductTableSection from "@/src/components/sections/packages/product-table-section";
import TitleContentBlock from "@/src/components/contents/title-content-block";
import { MaterialList } from "@/src/components/ui/material-list";

const ProductStatic = ({ product }: { product: Ifurniture_product }) => {
  const {
    selectedImage,
    setSelectedImage,
    selectedColor,
    setSelectedColor,
    selectedVariant,
    setSelectedVariant,
    quantity,
    setQuantity,
    heroImage,
    displayStock,
  } = useProductState(product);

  return (
    <>
      <HeroSection
        title={product.name}
        image_url={heroImage}
        imageAlt={`${product.name} product image`}
        height="medium"
        overlayOpacity="medium"
      />

      <SpacingLayout>
        <TwoColumnLayout
          className="mt-10"
          sidebar={
            <ProductSidebar
              product={product}
              selectedImage={selectedImage}
              onSelectImage={setSelectedImage}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
              selectedVariant={selectedVariant}
              onSelectVariant={setSelectedVariant}
              quantity={quantity}
              onQuantityChange={setQuantity}
              displayStock={displayStock}
            />
          }
        >
          <ContentSection
            title="Product Overview"
            htmlContent={product.description_content}
          />
          {/* <ProductTags tags={product.tags} /> */}
          <Dimension3DimageSection data={product.size_options} />
          <ProductWarranty warranty={product.warranty} />
          <ProductFeatures features={product.features} />

          <ProductSpecifications product={product} />
          <ProductSizeOptions sizeOptions={product.size_options} />
          <ProductCapacityOptions capacityOptions={product.capacity_options} />

          <ProductCare
            careInstructions={product.care_instructions}
            maintenanceInstructions={product.maintenance_instructions}
          />
          <ProductShipping
            assemblyRequired={product.assembly_required}
            assemblyMinutes={product.assembly_estimated_minutes}
          />

          <ProductVideo videoUrls={product.video_url} />
        </TwoColumnLayout>
        <TwoColumnLayout
          sidebar={
            <ProductSidebar
              product={product}
              selectedImage={selectedImage}
              onSelectImage={setSelectedImage}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
              selectedVariant={selectedVariant}
              onSelectVariant={setSelectedVariant}
              quantity={quantity}
              onQuantityChange={setQuantity}
              displayStock={displayStock}
            />
          }
          reversed={true}
        >
          <div className="md:max-w-3xl mb-8">
            <TitleContentBlock
              title="Materials"
              description="A closer look at the materials used in this piece — quality and craftsmanship, from frame to finish."
            />
          </div>
          {product.materials && product.materials.length > 0 ? (
            <MaterialList
              items={product.materials.map((mat) => ({
                title: mat.subtype ? `${mat.name} — ${mat.subtype}` : mat.name,
                description: mat.description ?? "",
                properties: mat.properties,
              }))}
            />
          ) : (
            <ErrorTextSection item="Materials" parent="product" />
          )}
        </TwoColumnLayout>
        <ProductTableSection product={product} slug={product.slug} />
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
