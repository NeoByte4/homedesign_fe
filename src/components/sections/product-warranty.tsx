import { Shield } from "lucide-react";
import type { Ifurniture_product } from "@/src/types/types";

export const ProductWarranty = ({
  warranty,
}: {
  warranty: Ifurniture_product["warranty"];
}) => {
  if (!warranty?.available) return null;

  return (
    <div className="mt-8">
      <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
        <Shield size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-sm">
            {warranty.duration} {warranty.unit} Warranty
          </p>
          {warranty.description && (
            <p className="text-xs text-text-secondary mt-1">
              {warranty.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
