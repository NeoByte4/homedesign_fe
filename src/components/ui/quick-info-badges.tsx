import { Package, Shield, Sparkles, Wrench } from "lucide-react";
import type { Ifurniture_product } from "@/src/types/types";

export const QuickInfoBadges = ({
  product,
}: {
  product: Ifurniture_product;
}) => (
  <div className="grid grid-cols-2 gap-2 text-xs">
    {product.assembly_required && (
      <div className="flex items-center gap-1.5 p-2 bg-muted/30 rounded">
        <Wrench size={14} className="text-blue-500" />
        <span>Assembly {product.assembly_estimated_minutes}min</span>
      </div>
    )}
    {product.warranty?.available && (
      <div className="flex items-center gap-1.5 p-2 bg-muted/30 rounded">
        <Shield size={14} className="text-green-500" />
        <span>
          {product.warranty.duration} {product.warranty.unit} warranty
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
);
