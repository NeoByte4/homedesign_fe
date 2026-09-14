"use client";

import Link from "next/link";
import { Heart, Share2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { routes } from "@/src/lib/routes";
import ServicesIcon from "@/src/components/primitives/services-icons-list";
import { ImageGallery } from "./image-gallery";
import { StarRating } from "./star-rating";
import { ColorPicker } from "./color-picker";
import { VariantPicker } from "./variant-picker";
import { QuantityPicker } from "./quantity-picker";
import { QuickInfoBadges } from "./quick-info-badges";
import type { Ifurniture_product } from "@/src/types/types";

interface ProductSidebarProps {
  product: Ifurniture_product;
  // image
  selectedImage: number;
  onSelectImage: (idx: number) => void;
  // color
  selectedColor: string | null;
  onSelectColor: (id: string | null) => void;
  // variant
  selectedVariant: string | null;
  onSelectVariant: (sku: string | null) => void;
  // quantity
  quantity: number;
  onQuantityChange: (q: number) => void;
  // stock
  displayStock: number;
}

export const ProductSidebar = ({
  product,
  selectedImage,
  onSelectImage,
  selectedColor,
  onSelectColor,
  selectedVariant,
  onSelectVariant,
  quantity,
  onQuantityChange,
  displayStock,
}: ProductSidebarProps) => (
  <div className="space-y-6 border rounded-lg p-4">
    <ImageGallery
      images={product.images_url ?? []}
      productName={product.name}
      discount={product.discount}
      selectedIndex={selectedImage}
      onSelect={onSelectImage}
    />

    {product.rating != null && (
      <div className="flex items-center justify-between">
        <StarRating rating={product.rating} />
        <span className="text-xs text-text-secondary">
          {product.stock_quantity != null && product.stock_quantity > 0 && (
            <span className="text-green-600 font-medium">
              In Stock ({displayStock})
            </span>
          )}
        </span>
      </div>
    )}

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

    <ColorPicker
      colors={product.color ?? []}
      selected={selectedColor}
      onChange={onSelectColor}
    />

    <VariantPicker
      variants={product.variants ?? []}
      selected={selectedVariant}
      onChange={onSelectVariant}
    />

    {product.inclusion_icons && product.inclusion_icons.length > 0 && (
      <div className="flex items-center flex-wrap gap-2 text-text-secondary">
        <ServicesIcon inclusion_icons={product.inclusion_icons} />
      </div>
    )}

    <div className="space-y-3">
      <QuantityPicker
        quantity={quantity}
        max={displayStock}
        onChange={onQuantityChange}
      />

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
        <Button variant="outline" size="sm" className="flex-1 text-xs">
          <Heart size={14} />
          Wishlist
        </Button>
        <Button variant="outline" size="sm" className="flex-1 text-xs">
          <Share2 size={14} />
          Share
        </Button>
      </div>
    </div>

    <QuickInfoBadges product={product} />

    <Link href={routes.contact} className="block">
      <Button variant="outline" className="w-full text-sm">
        Contact us for queries
      </Button>
    </Link>
  </div>
);
