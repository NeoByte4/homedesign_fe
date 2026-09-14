"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Ifurniture_product } from "@/src/types/types";
import ContainerLayout from "../../layouts/container-layout";
import TitleContentBlock from "../../contents/title-content-block";
import ProductVariantTableRow from "./product-variant-table-row";

interface Props {
  product: Ifurniture_product;
  slug?: string;
}

function ProductTableSection({ product, slug }: Props) {
  const router = useRouter();

  const variants = product.variants ?? [];
  if (!variants.length) return null;

  return (
    <ContainerLayout>
      <TitleContentBlock
        title="Choose Your Configuration"
        description={`Select the size, material, and finish that fits your space. Prices update automatically — hit "Add to Cart" when you're ready.`}
        isCenter
      />

      <Table className="mt-12">
        <TableHeader>
          <TableRow>
            <TableHead>Variant</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {variants.map((variant) => (
            <ProductVariantTableRow
              key={variant.sku}
              product={product}
              variant={variant}
              router={router}
              pageSlug={slug ?? product.slug}
            />
          ))}
        </TableBody>
      </Table>
    </ContainerLayout>
  );
}

export default ProductTableSection;
