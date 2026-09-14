import { Info } from "lucide-react";
import { SectionWrapper } from "../ui/section-wrapper";
import type { Ifurniture_product } from "@/src/types/types";

export const ProductSpecifications = ({
  product,
}: {
  product: Ifurniture_product;
}) => {
  const specs = [
    product.weight_capacity_kg && {
      label: "Weight Capacity",
      value: `${product.weight_capacity_kg} kg`,
    },
    product.seating_capacity?.length && {
      label: "Seating Capacity",
      value: `${product.seating_capacity.join(", ")} people`,
    },
    product.environment?.length && {
      label: "Environment",
      value: product.environment.join(", ").replace(/_/g, " "),
      capitalize: true,
    },
    {
      label: "Assembly",
      value: product.assembly_required
        ? `Required (~${product.assembly_estimated_minutes} min)`
        : "Not Required",
    },
    { label: "Adjustable", value: product.is_adjustable ? "Yes" : "No" },
    { label: "Foldable", value: product.is_foldable ? "Yes" : "No" },
    { label: "Stackable", value: product.is_stackable ? "Yes" : "No" },
    { label: "Reclining", value: product.is_reclining ? "Yes" : "No" },
    { label: "Customizable", value: product.is_customizable ? "Yes" : "No" },
    product.currency && { label: "Currency", value: product.currency },
  ].filter(Boolean) as { label: string; value: string; capitalize?: boolean }[];

  return (
    <div className="mt-8">
      <SectionWrapper
        title="Specifications"
        icon={<Info size={18} className="text-orange-500" />}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {specs.map((spec) => (
            <div key={spec.label} className="p-3 border rounded-lg">
              <p className="text-xs text-text-secondary">{spec.label}</p>
              <p
                className={`font-semibold text-sm ${spec.capitalize ? "capitalize" : ""}`}
              >
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};
