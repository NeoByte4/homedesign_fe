"use client";

import { useState, useMemo } from "react";
import type { Ifurniture_product } from "@/src/types/types";

export const useProductState = (product: Ifurniture_product) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const shouldShowDiscount = product.discount != null && product.discount > 0;

  const heroImage =
    product.images_url?.[selectedImage]?.url ??
    product.images_url?.[0]?.url ??
    "/placeholder.jpg";

  const netPrice = useMemo(() => {
    if (product.price == null) return undefined;
    return product.price - (product.price * (product.discount ?? 0)) / 100;
  }, [product.price, product.discount]);

  const activeVariant = useMemo(
    () => product.variants?.find((v) => v.sku === selectedVariant),
    [product.variants, selectedVariant],
  );

  const displayPrice = activeVariant?.price ?? netPrice ?? product.price;
  const displayComparePrice =
    activeVariant?.compare_at_price ??
    (shouldShowDiscount ? product.price : undefined);

  const displayStock =
    activeVariant?.stock_quantity ?? product.stock_quantity ?? 0;

  return {
    // state
    selectedImage,
    setSelectedImage,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    selectedVariant,
    setSelectedVariant,
    quantity,
    setQuantity,
    // derived
    shouldShowDiscount,
    heroImage,
    netPrice,
    activeVariant,
    displayPrice,
    displayComparePrice,
    displayStock,
  };
};
