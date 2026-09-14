import { Ruler } from "lucide-react";
import { SectionWrapper } from "../ui/section-wrapper";
import type { Ifurniture_product } from "@/src/types/types";

export const ProductSizeOptions = ({
  sizeOptions,
}: {
  sizeOptions: Ifurniture_product["size_options"];
}) => {
  if (!sizeOptions?.length) return null;

  return (
    <div className="mt-8">
      <SectionWrapper
        title="Available Sizes"
        icon={<Ruler size={18} className="text-green-500" />}
      >
        <div className="space-y-3">
          {sizeOptions.map((size) => (
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
  );
};
