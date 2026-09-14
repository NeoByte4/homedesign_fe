"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { routes } from "@/src/lib/routes";
import { Ifurniture_product } from "@/src/types/types";
import { IProductVariant } from "@/src/types/generic";

interface Props {
  product: Ifurniture_product;
  variant: IProductVariant;
  pageSlug: string;
  router: ReturnType<typeof useRouter>;
  showMaterialColumn?: boolean;
}

const ProductVariantTableRow = ({
  product,
  variant,
  pageSlug,
  router,
  showMaterialColumn = false,
}: Props) => {
  const sizeLabel =
    product.size_options?.find((s) => s.code === variant.size_code)?.name ??
    variant.size_code ??
    "—";

  const colorLabel =
    product.color_options?.find((c) => c.id === variant.color_id)?.name ?? "—";

  const materialLabel =
    product.materials?.find((m) => m.id === variant.fabric_id)?.name ?? "—";

  const isSoldOut = !variant.is_available || variant.stock_quantity <= 0;

  const handleAddToCart = () => {
    const params = new URLSearchParams({
      sku: variant.sku,
      size: variant.size_code ?? "",
      color: variant.color_id ?? "",
    });
    router.push(`${routes.products}/${pageSlug}?${params.toString()}`);
  };

  return (
    <TableRow
      style={isSoldOut ? { cursor: "not-allowed" } : undefined}
      key={variant.sku}
    >
      <TableCell className="font-medium">{variant.variant_name}</TableCell>

      {showMaterialColumn && <TableCell>{materialLabel}</TableCell>}

      <TableCell className="capitalize">{sizeLabel}</TableCell>
      <TableCell className="capitalize">{colorLabel}</TableCell>

      <TableCell>
        <span className="font-bold font-secondary">
          {product.currency ?? "NPR"}{" "}
        </span>
        <span className="font-bold">{variant.price.toLocaleString()}</span>
        {variant.compare_at_price &&
          variant.compare_at_price > variant.price && (
            <span className="ml-2 text-xs line-through text-muted-foreground">
              {variant.compare_at_price.toLocaleString()}
            </span>
          )}
      </TableCell>

      <TableCell>
        {isSoldOut ? (
          <span className="text-xs text-destructive font-medium">
            Out of Stock
          </span>
        ) : (
          <span className="text-xs text-green-600 font-medium">
            {variant.stock_quantity} in stock
          </span>
        )}
      </TableCell>

      <TableCell>
        {isSoldOut ? (
          <Button disabled className="text-xs" variant="destructive" size="sm">
            Sold Out
          </Button>
        ) : (
          <Button
            onClick={handleAddToCart}
            className="text-xs"
            variant="secondary"
            size="sm"
          >
            Add to Cart
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default ProductVariantTableRow;
