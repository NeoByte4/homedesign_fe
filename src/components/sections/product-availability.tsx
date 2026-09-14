import React from "react";
import { Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { Ifurniture_product } from "@/src/types/types";

interface ProductAvailabilityProps {
  product: Ifurniture_product;
}

const ProductAvailability: React.FC<ProductAvailabilityProps> = ({
  product,
}) => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base md:text-lg font-bold font-secondary">
          <Package size={18} className="text-emerald-500" />
          Availability
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-3 border rounded-lg text-center bg-neutral-50">
            <p className="text-xs text-muted-foreground">Status</p>
            <p
              className={`font-semibold text-sm ${
                product.is_available ? "text-green-600" : "text-red-500"
              }`}
            >
              {product.is_available ? "In Stock" : "Out of Stock"}
            </p>
          </div>

          <div className="p-3 border rounded-lg text-center bg-neutral-50">
            <p className="text-xs text-muted-foreground">Stock Quantity</p>
            <p className="font-semibold text-sm">
              {product.stock_quantity ?? "N/A"}
            </p>
          </div>

          <div className="p-3 border rounded-lg text-center bg-neutral-50">
            <p className="text-xs text-muted-foreground">Variants</p>
            <p className="font-semibold text-sm">
              {product.has_variants
                ? `${product.variants?.length ?? 0} options`
                : "No variants"}
            </p>
          </div>
        </div>

        {/* Variants Table */}
        {product.variants && product.variants.length > 0 && (
          <div className="rounded-xl border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/40">
                  <TableHead className="text-xs">SKU</TableHead>
                  <TableHead className="text-xs">Variant</TableHead>
                  <TableHead className="text-xs text-right">Price</TableHead>
                  <TableHead className="text-xs text-right">Stock</TableHead>
                  <TableHead className="text-xs text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {product.variants.map((v) => (
                  <TableRow key={v.sku} className="hover:bg-muted/20">
                    <TableCell className="text-xs font-mono p-2">
                      {v.sku}
                    </TableCell>
                    <TableCell className="text-xs p-2">
                      {v.variant_name}
                    </TableCell>
                    <TableCell className="text-xs p-2 text-right">
                      RS {v.price.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-xs p-2 text-right">
                      {v.stock_quantity}
                    </TableCell>
                    <TableCell className="text-xs p-2 text-center">
                      <Badge
                        variant={v.is_available ? "default" : "destructive"}
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          v.is_available
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-red-100 text-red-700 hover:bg-red-100"
                        }`}
                      >
                        {v.is_available ? "Available" : "Unavailable"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductAvailability;
