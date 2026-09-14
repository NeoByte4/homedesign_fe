import { Package } from "lucide-react";
import { SectionWrapper } from "../ui/section-wrapper";
import type { Ifurniture_product } from "@/src/types/types";

export const ProductCapacityOptions = ({
  capacityOptions,
}: {
  capacityOptions: Ifurniture_product["capacity_options"];
}) => {
  if (!capacityOptions?.length) return null;

  return (
    <div className="mt-8">
      <SectionWrapper
        title="Capacity Options"
        icon={<Package size={18} className="text-indigo-500" />}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {capacityOptions.map((cap, idx) => (
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
  );
};
