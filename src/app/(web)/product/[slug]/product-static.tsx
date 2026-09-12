"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/src/lib/routes";
import {
  ArrowUpRight,
  ShoppingCart,
  Star,
  Check,
  ChevronDown,
  ChevronUp,
  Package,
  Ruler,
  Palette,
  Layers,
  Shield,
  Sparkles,
  Truck,
  Wrench,
  Heart,
  Share2,
  Minus,
  Plus,
  Info,
  AlertCircle,
} from "lucide-react";
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
import ContentSection from "@/src/components/sections/contents/content-section";
import { Ifurniture_product } from "@/src/types/types";
import { shouldRenderSection } from "@/src/utils/should-render-section";

const SectionWrapper = ({
  title,
  icon,
  children,
  defaultOpen = true,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-semibold text-left">{title}</span>
        </div>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < fullStars
              ? "fill-yellow-400 text-yellow-400"
              : i === fullStars && hasHalfStar
                ? "fill-yellow-400/50 text-yellow-400"
                : "text-gray-300"
          }
        />
      ))}
      <span className="text-sm text-text-secondary ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────

const ProductStatic = ({ product }: { product: Ifurniture_product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  // ─── Derived Values ───────────────────────────────────────────────────

  const shouldShowDiscount = product.discount != null && product.discount > 0;
  const heroImage =
    product.images_url?.[selectedImage]?.url ??
    product.images_url?.[0]?.url ??
    "/placeholder.jpg";

  const netPrice = useMemo(() => {
    if (product.price == null) return undefined;
    return product.price - (product.price * (product.discount ?? 0)) / 100;
  }, [product.price, product.discount]);

  const activeColor = useMemo(() => {
    return product.color?.find((c) => c.id === selectedColor);
  }, [product.color, selectedColor]);

  const activeSize = useMemo(() => {
    return product.size_options?.find((s) => s.code === selectedSize);
  }, [product.size_options, selectedSize]);

  const activeVariant = useMemo(() => {
    return product.variants?.find((v) => v.sku === selectedVariant);
  }, [product.variants, selectedVariant]);

  const displayPrice = activeVariant?.price ?? netPrice ?? product.price;
  const displayComparePrice =
    activeVariant?.compare_at_price ??
    (shouldShowDiscount ? product.price : undefined);

  const displayStock =
    activeVariant?.stock_quantity ?? product.stock_quantity ?? 0;

  const displayDimensions = activeSize?.dimensions ?? product.dimensions?.[0];

  // ─── Render ───────────────────────────────────────────────────────────

  return (
    <>
      {/* ─── Hero Section ─────────────────────────────────────────────── */}
      <HeroSection height="medium" image_url={heroImage} title={product.name}>
        <section className="absolute z-50 w-full h-20 bottom-0 bg-bg/30 backdrop-blur-xs rounded-lg overflow-hidden">
          <div className="h-full flex items-center justify-between">
            <div className="pl-3 md:pl-6 text-bg">
              <span className="text-xs md:text-sm">
                {shouldShowDiscount ? "Special Price" : "Price"}
              </span>
              <div className="flex items-baseline gap-2">
                <h4 className="text-xl md:text-3xl font-medium">
                  {displayPrice != null
                    ? `RS ${displayPrice.toFixed(2)}`
                    : product.price_range}
                </h4>
                {shouldShowDiscount && displayComparePrice != null && (
                  <span className="text-base md:text-lg text-muted">
                    <span className="line-through">
                      RS {displayComparePrice.toFixed(2)}
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
        {/* ─── Main Two-Column Layout ────────────────────────────────── */}
        <TwoColumnLayout
          className="mt-10"
          sidebar={
            <div className="space-y-6 border rounded-lg p-4">
              {/* ─── Image Gallery ───────────────────────────────────── */}
              <div className="space-y-3">
                <div className="overflow-hidden rounded-lg aspect-[4/3] relative">
                  <Image
                    src={heroImage}
                    width={500}
                    height={500}
                    alt={`Image for ${product.name}`}
                    className="w-full h-full object-cover"
                    quality={75}
                  />
                  {shouldShowDiscount && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {product.images_url && product.images_url.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {product.images_url.map((img, idx) => (
                      <button
                        key={img.id}
                        onClick={() => setSelectedImage(idx)}
                        className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                          selectedImage === idx
                            ? "border-blue-500 ring-2 ring-blue-200"
                            : "border-transparent hover:border-gray-300"
                        }`}
                      >
                        <Image
                          src={img.url}
                          width={64}
                          height={64}
                          alt={`${product.name} thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* ─── Rating ──────────────────────────────────────────── */}
              {product.rating != null && (
                <div className="flex items-center justify-between">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-text-secondary">
                    {product.stock_quantity != null &&
                      product.stock_quantity > 0 && (
                        <span className="text-green-600 font-medium">
                          In Stock ({displayStock})
                        </span>
                      )}
                  </span>
                </div>
              )}

              {/* ─── Category Tags ───────────────────────────────────── */}
              <div className="flex flex-wrap gap-1">
                {product.category?.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border px-3 py-1 text-xs capitalize bg-muted/30"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* ─── Color Selection ─────────────────────────────────── */}
              {product.color && product.color.length > 0 && (
                <div>
                  <p className="text-sm font-semibold mb-2 flex items-center gap-1">
                    <Palette size={14} />
                    Available Colors
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.color.map((c) => (
                      <button
                        key={c.id}
                        title={c.name}
                        onClick={() =>
                          setSelectedColor(selectedColor === c.id ? null : c.id)
                        }
                        className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                          selectedColor === c.id
                            ? "border-blue-500 ring-2 ring-blue-200 scale-110"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        style={{ backgroundColor: c.color_code }}
                      >
                        {selectedColor === c.id && (
                          <Check
                            size={14}
                            className="text-white drop-shadow-md"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                  {activeColor && (
                    <p className="text-xs text-text-secondary mt-1">
                      Selected: {activeColor.name}
                    </p>
                  )}
                </div>
              )}

              {/* ─── Size Selection ──────────────────────────────────── */}
              {/* {product.size_options && product.size_options.length > 0 && (
                <div>
                  <p className="text-sm font-semibold mb-2 flex items-center gap-1">
                    <Ruler size={14} />
                    Size
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.size_options.map((size) => (
                      <button
                        key={size.code}
                        onClick={() =>
                          setSelectedSize(
                            selectedSize === size.code ? null : size.code,
                          )
                        }
                        className={`px-3 py-1.5 rounded-md border text-xs font-medium transition-all ${
                          selectedSize === size.code
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-300 hover:border-gray-400"
                        } ${!size.is_available ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={!size.is_available}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                  {activeSize && (
                    <p className="text-xs text-text-secondary mt-1">
                      {activeSize.description}
                    </p>
                  )}
                </div>
              )} */}

              {/* ─── Variant Selection ───────────────────────────────── */}
              {product.variants && product.variants.length > 0 && (
                <div>
                  <p className="text-sm font-semibold mb-2 flex items-center gap-1">
                    <Layers size={14} />
                    Variant
                  </p>
                  <select
                    value={selectedVariant ?? ""}
                    onChange={(e) => setSelectedVariant(e.target.value || null)}
                    className="w-full border rounded-md px-3 py-2 text-sm bg-white"
                  >
                    <option value="">Select a variant</option>
                    {product.variants.map((v) => (
                      <option
                        key={v.sku}
                        value={v.sku}
                        disabled={!v.is_available}
                      >
                        {v.variant_name} — RS {v.price.toFixed(2)}
                        {!v.is_available ? " (Out of Stock)" : ""}
                      </option>
                    ))}
                  </select>
                  {activeVariant && (
                    <div className="mt-2 text-xs text-text-secondary space-y-0.5">
                      <p>SKU: {activeVariant.sku}</p>
                      {activeVariant.weight_kg && (
                        <p>Weight: {activeVariant.weight_kg} kg</p>
                      )}
                      <p>
                        Stock:{" "}
                        <span
                          className={
                            activeVariant.stock_quantity > 0
                              ? "text-green-600"
                              : "text-red-500"
                          }
                        >
                          {activeVariant.stock_quantity > 0
                            ? `${activeVariant.stock_quantity} available`
                            : "Out of stock"}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* ─── Inclusion Icons ─────────────────────────────────── */}
              {product.inclusion_icons &&
                product.inclusion_icons.length > 0 && (
                  <div className="flex items-center flex-wrap gap-2 text-text-secondary">
                    <ServicesIcon inclusion_icons={product.inclusion_icons} />
                  </div>
                )}

              {/* ─── Quantity + Add to Cart ──────────────────────────── */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">Qty:</span>
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2 py-1 hover:bg-muted/50"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-4 py-1 text-sm font-medium border-x">
                      {quantity}
                    </span>
                    <button
                      onClick={() =>
                        setQuantity(Math.min(displayStock || 99, quantity + 1))
                      }
                      className="px-2 py-1 hover:bg-muted/50"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="default-blue"
                  className="w-full"
                  disabled={displayStock === 0}
                >
                  <ShoppingCart size={18} />
                  {displayStock === 0 ? "Out of Stock" : "Add to Cart"}
                </Button>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                  >
                    <Heart size={14} />
                    Wishlist
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                  >
                    <Share2 size={14} />
                    Share
                  </Button>
                </div>
              </div>

              {/* ─── Quick Info Badges ───────────────────────────────── */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {product.assembly_required && (
                  <div className="flex items-center gap-1.5 p-2 bg-muted/30 rounded">
                    <Wrench size={14} className="text-blue-500" />
                    <span>
                      Assembly {product.assembly_estimated_minutes}min
                    </span>
                  </div>
                )}
                {product.warranty?.available && (
                  <div className="flex items-center gap-1.5 p-2 bg-muted/30 rounded">
                    <Shield size={14} className="text-green-500" />
                    <span>
                      {product.warranty.duration} {product.warranty.unit}{" "}
                      warranty
                    </span>
                  </div>
                )}
                {product.is_customizable && (
                  <div className="flex items-center gap-1.5 p-2 bg-muted/30 rounded">
                    <Sparkles size={14} className="text-purple-500" />
                    <span>Customizable</span>
                  </div>
                )}
                {product.environment?.includes("indoor") && (
                  <div className="flex items-center gap-1.5 p-2 bg-muted/30 rounded">
                    <Package size={14} className="text-orange-500" />
                    <span>Indoor Use</span>
                  </div>
                )}
              </div>
            </div>
          }
        >
          {/* ─── Product Overview ────────────────────────────────────── */}
          <ContentSection
            title="Product Overview"
            text={product.subtitle}
            htmlContent={product.description_content}
          />

          {/* ─── Short Description ───────────────────────────────────── */}
          {product.short_description && (
            <div className="mt-6 p-4 bg-muted/20 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-text-secondary italic">
                {product.short_description}
              </p>
            </div>
          )}

          {/* ─── Tags ────────────────────────────────────────────────── */}
          {product.tags && product.tags.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-semibold mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted/40 rounded-full text-xs capitalize"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ─── Dimensions Section ──────────────────────────────────── */}
          {shouldRenderSection(product.dimensions) && (
            <div className="mt-8">
              <TitleContentBlock title="Dimensions" description="" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {product.dimensions?.map((dim, idx) => (
                  <div key={idx} className="border rounded-lg p-4 text-sm">
                    {dim.name && (
                      <p className="font-semibold mb-2">{dim.name}</p>
                    )}
                    {dim.width != null &&
                      dim.depth != null &&
                      dim.height != null && (
                        <p className="text-text-secondary">
                          W {dim.width}
                          {dim.unit?.code} × D {dim.depth}
                          {dim.unit?.code} × H {dim.height}
                          {dim.unit?.code}
                        </p>
                      )}
                    {dim.seat_width != null && (
                      <p className="text-text-secondary mt-1">
                        Seat: W {dim.seat_width}
                        {dim.unit?.code} × D {dim.seat_depth}
                        {dim.unit?.code} × H {dim.seat_height}
                        {dim.unit?.code}
                      </p>
                    )}
                    {dim.armrest_height != null && dim.armrest_height > 0 && (
                      <p className="text-text-secondary">
                        Armrest: H {dim.armrest_height}
                        {dim.unit?.code}
                      </p>
                    )}
                    {dim.backrest_height != null && dim.backrest_height > 0 && (
                      <p className="text-text-secondary">
                        Backrest: H {dim.backrest_height}
                        {dim.unit?.code}
                      </p>
                    )}
                    {dim.diameter != null && dim.diameter > 0 && (
                      <p className="text-text-secondary">
                        Diameter: {dim.diameter}
                        {dim.unit?.code}
                      </p>
                    )}
                    {dim.mattress_length != null && (
                      <p className="text-text-secondary">
                        Mattress: L {dim.mattress_length}
                        {dim.unit?.code} × W {dim.mattress_width}
                        {dim.unit?.code}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── Materials Section ───────────────────────────────────── */}
          {product.materials && product.materials.length > 0 && (
            <div className="mt-8">
              <SectionWrapper
                title="Materials & Construction"
                icon={<Layers size={18} className="text-blue-500" />}
              >
                <div className="space-y-4">
                  {product.materials.map((mat) => (
                    <div
                      key={mat.id}
                      className="flex gap-4 p-3 border rounded-lg"
                    >
                      {mat.image && (
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={mat.image.url}
                            width={64}
                            height={64}
                            alt={mat.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium px-2 py-0.5 bg-blue-50 text-blue-700 rounded">
                            {mat.category}
                          </span>
                          <span className="font-semibold text-sm">
                            {mat.name}
                          </span>
                        </div>
                        {mat.subtype && (
                          <p className="text-xs text-text-secondary mt-0.5">
                            {mat.subtype}
                          </p>
                        )}
                        {mat.description && (
                          <p className="text-xs text-text-secondary mt-1">
                            {mat.description}
                          </p>
                        )}
                        {mat.properties && mat.properties.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {mat.properties.map((prop) => (
                              <span
                                key={prop}
                                className="text-xs px-2 py-0.5 bg-muted/40 rounded-full"
                              >
                                {prop}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionWrapper>
            </div>
          )}

          {/* ─── Features Section ────────────────────────────────────── */}
          {product.features && product.features.length > 0 && (
            <div className="mt-8">
              <SectionWrapper
                title="Key Features"
                icon={<Sparkles size={18} className="text-purple-500" />}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feat) => (
                    <div
                      key={feat.id}
                      className="flex gap-3 p-3 bg-muted/20 rounded-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{feat.name}</p>
                        {feat.description && (
                          <p className="text-xs text-text-secondary mt-0.5">
                            {feat.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionWrapper>
            </div>
          )}

          {/* ─── Specifications Section ──────────────────────────────── */}
          <div className="mt-8">
            <SectionWrapper
              title="Specifications"
              icon={<Info size={18} className="text-orange-500" />}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Weight Capacity */}
                {product.weight_capacity_kg && (
                  <div className="p-3 border rounded-lg">
                    <p className="text-xs text-text-secondary">
                      Weight Capacity
                    </p>
                    <p className="font-semibold text-sm">
                      {product.weight_capacity_kg} kg
                    </p>
                  </div>
                )}

                {/* Seating Capacity */}
                {product.seating_capacity &&
                  product.seating_capacity.length > 0 && (
                    <div className="p-3 border rounded-lg">
                      <p className="text-xs text-text-secondary">
                        Seating Capacity
                      </p>
                      <p className="font-semibold text-sm">
                        {product.seating_capacity.join(", ")} people
                      </p>
                    </div>
                  )}

                {/* Environment */}
                {product.environment && product.environment.length > 0 && (
                  <div className="p-3 border rounded-lg">
                    <p className="text-xs text-text-secondary">Environment</p>
                    <p className="font-semibold text-sm capitalize">
                      {product.environment.join(", ").replace(/_/g, " ")}
                    </p>
                  </div>
                )}

                {/* Assembly */}
                <div className="p-3 border rounded-lg">
                  <p className="text-xs text-text-secondary">Assembly</p>
                  <p className="font-semibold text-sm">
                    {product.assembly_required
                      ? `Required (~${product.assembly_estimated_minutes} min)`
                      : "Not Required"}
                  </p>
                </div>

                {/* Adjustable */}
                <div className="p-3 border rounded-lg">
                  <p className="text-xs text-text-secondary">Adjustable</p>
                  <p className="font-semibold text-sm">
                    {product.is_adjustable ? "Yes" : "No"}
                  </p>
                </div>

                {/* Foldable */}
                <div className="p-3 border rounded-lg">
                  <p className="text-xs text-text-secondary">Foldable</p>
                  <p className="font-semibold text-sm">
                    {product.is_foldable ? "Yes" : "No"}
                  </p>
                </div>

                {/* Stackable */}
                <div className="p-3 border rounded-lg">
                  <p className="text-xs text-text-secondary">Stackable</p>
                  <p className="font-semibold text-sm">
                    {product.is_stackable ? "Yes" : "No"}
                  </p>
                </div>

                {/* Reclining */}
                <div className="p-3 border rounded-lg">
                  <p className="text-xs text-text-secondary">Reclining</p>
                  <p className="font-semibold text-sm">
                    {product.is_reclining ? "Yes" : "No"}
                  </p>
                </div>

                {/* Customizable */}
                <div className="p-3 border rounded-lg">
                  <p className="text-xs text-text-secondary">Customizable</p>
                  <p className="font-semibold text-sm">
                    {product.is_customizable ? "Yes" : "No"}
                  </p>
                </div>

                {/* Currency */}
                {product.currency && (
                  <div className="p-3 border rounded-lg">
                    <p className="text-xs text-text-secondary">Currency</p>
                    <p className="font-semibold text-sm">{product.currency}</p>
                  </div>
                )}
              </div>
            </SectionWrapper>
          </div>

          {/* ─── Size Options ────────────────────────────────────────── */}
          {product.size_options && product.size_options.length > 0 && (
            <div className="mt-8">
              <SectionWrapper
                title="Available Sizes"
                icon={<Ruler size={18} className="text-green-500" />}
              >
                <div className="space-y-3">
                  {product.size_options.map((size) => (
                    <div
                      key={size.code}
                      className="p-3 border rounded-lg flex items-start justify-between"
                    >
                      <div>
                        <p className="font-semibold text-sm">
                          {size.name}{" "}
                          {size.is_default && (
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded ml-2">
                              Default
                            </span>
                          )}
                        </p>
                        {size.description && (
                          <p className="text-xs text-text-secondary mt-0.5">
                            {size.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2 mt-2 text-xs text-text-secondary">
                          {size.dimensions.width != null &&
                            size.dimensions.height != null && (
                              <span>
                                W {size.dimensions.width}
                                {size.dimensions.unit?.code} × H{" "}
                                {size.dimensions.height}
                                {size.dimensions.unit?.code}
                              </span>
                            )}
                          {size.dimensions.depth != null && (
                            <span>
                              D {size.dimensions.depth}
                              {size.dimensions.unit?.code}
                            </span>
                          )}
                          {size.dimensions.seat_height != null && (
                            <span>
                              Seat H {size.dimensions.seat_height}
                              {size.dimensions.unit?.code}
                            </span>
                          )}
                        </div>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          size.is_available
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {size.is_available ? "Available" : "Unavailable"}
                      </span>
                    </div>
                  ))}
                </div>
              </SectionWrapper>
            </div>
          )}

          {/* ─── Capacity Options ────────────────────────────────────── */}
          {product.capacity_options && product.capacity_options.length > 0 && (
            <div className="mt-8">
              <SectionWrapper
                title="Capacity Options"
                icon={<Package size={18} className="text-indigo-500" />}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.capacity_options.map((cap, idx) => (
                    <div key={idx} className="p-3 border rounded-lg">
                      <p className="text-xs text-text-secondary">{cap.name}</p>
                      <p className="font-semibold text-sm">
                        {cap.value} {cap.unit}
                      </p>
                      {cap.description && (
                        <p className="text-xs text-text-secondary mt-1">
                          {cap.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </SectionWrapper>
            </div>
          )}

          {/* ─── Warranty Section ────────────────────────────────────── */}
          {product.warranty && product.warranty.available && (
            <div className="mt-8">
              <SectionWrapper
                title="Warranty"
                icon={<Shield size={18} className="text-green-500" />}
              >
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <Shield
                    size={24}
                    className="text-green-600 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="font-semibold text-sm">
                      {product.warranty.duration} {product.warranty.unit}{" "}
                      Warranty
                    </p>
                    {product.warranty.description && (
                      <p className="text-xs text-text-secondary mt-1">
                        {product.warranty.description}
                      </p>
                    )}
                  </div>
                </div>
              </SectionWrapper>
            </div>
          )}

          {/* ─── Care & Maintenance ──────────────────────────────────── */}
          {(product.care_instructions?.length ||
            product.maintenance_instructions?.length) && (
            <div className="mt-8">
              <SectionWrapper
                title="Care & Maintenance"
                icon={<Wrench size={18} className="text-amber-500" />}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.care_instructions &&
                    product.care_instructions.length > 0 && (
                      <div>
                        <p className="font-semibold text-sm mb-2 flex items-center gap-1">
                          <Heart size={14} className="text-red-500" />
                          Care Instructions
                        </p>
                        <ul className="space-y-1.5">
                          {product.care_instructions.map((inst, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-text-secondary"
                            >
                              <Check
                                size={12}
                                className="text-green-500 mt-0.5 flex-shrink-0"
                              />
                              {inst}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {product.maintenance_instructions &&
                    product.maintenance_instructions.length > 0 && (
                      <div>
                        <p className="font-semibold text-sm mb-2 flex items-center gap-1">
                          <Wrench size={14} className="text-blue-500" />
                          Maintenance
                        </p>
                        <ul className="space-y-1.5">
                          {product.maintenance_instructions.map((inst, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-text-secondary"
                            >
                              <AlertCircle
                                size={12}
                                className="text-amber-500 mt-0.5 flex-shrink-0"
                              />
                              {inst}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </SectionWrapper>
            </div>
          )}

          {/* ─── Shipping & Assembly ─────────────────────────────────── */}
          <div className="mt-8">
            <SectionWrapper
              title="Shipping & Assembly"
              icon={<Truck size={18} className="text-cyan-500" />}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                  <Truck size={20} className="text-cyan-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Delivery</p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      Available within Kathmandu Valley. Free delivery for
                      orders above RS 1,000.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                  <Wrench size={20} className="text-cyan-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Assembly</p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {product.assembly_required
                        ? `Assembly required (~${product.assembly_estimated_minutes} minutes). Tools and instructions included.`
                        : "No assembly required. Ready to use."}
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>

          {/* ─── Stock & Availability ────────────────────────────────── */}
          <div className="mt-8">
            <SectionWrapper
              title="Availability"
              icon={<Package size={18} className="text-emerald-500" />}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3 border rounded-lg text-center">
                  <p className="text-xs text-text-secondary">Status</p>
                  <p
                    className={`font-semibold text-sm ${
                      product.is_available ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {product.is_available ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <p className="text-xs text-text-secondary">Stock Quantity</p>
                  <p className="font-semibold text-sm">
                    {product.stock_quantity ?? "N/A"}
                  </p>
                </div>
                <div className="p-3 border rounded-lg text-center">
                  <p className="text-xs text-text-secondary">Variants</p>
                  <p className="font-semibold text-sm">
                    {product.has_variants
                      ? `${product.variants?.length ?? 0} options`
                      : "No variants"}
                  </p>
                </div>
              </div>

              {/* Variant Table */}
              {product.variants && product.variants.length > 0 && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-muted/40">
                        <th className="text-left p-2 border">SKU</th>
                        <th className="text-left p-2 border">Variant</th>
                        <th className="text-right p-2 border">Price</th>
                        <th className="text-right p-2 border">Stock</th>
                        <th className="text-center p-2 border">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.variants.map((v) => (
                        <tr key={v.sku} className="hover:bg-muted/20">
                          <td className="p-2 border font-mono">{v.sku}</td>
                          <td className="p-2 border">{v.variant_name}</td>
                          <td className="p-2 border text-right">
                            RS {v.price.toFixed(2)}
                          </td>
                          <td className="p-2 border text-right">
                            {v.stock_quantity}
                          </td>
                          <td className="p-2 border text-center">
                            <span
                              className={`px-2 py-0.5 rounded-full ${
                                v.is_available
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {v.is_available ? "Available" : "Unavailable"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </SectionWrapper>
          </div>

          {/* ─── Product Meta ────────────────────────────────────────── */}
          <div className="mt-8">
            {product.video_url && product.video_url.length > 0 && (
              <div className="aspect-video rounded-lg overflow-hidden">
                <video
                  controls
                  poster={product.video_url[0]?.thumbnail_url}
                  className="w-full h-full object-cover"
                >
                  <source src={product.video_url[0]?.url} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
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
