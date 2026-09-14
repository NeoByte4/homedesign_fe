"use client";

import { Layers } from "lucide-react";
import type { Ifurniture_product } from "@/src/types/types";

type Variant = NonNullable<Ifurniture_product["variants"]>[number];

interface VariantPickerProps {
  variants: Variant[];
  selected: string | null;
  onChange: (sku: string | null) => void;
}

export const VariantPicker = ({
  variants,
  selected,
  onChange,
}: VariantPickerProps) => {
  if (!variants?.length) return null;

  const activeVariant = variants.find((v) => v.sku === selected);

  return (
    <div>
      <p className="text-sm font-semibold mb-2 flex items-center gap-1">
        <Layers size={14} />
        Variant
      </p>
      <select
        value={selected ?? ""}
        onChange={(e) => onChange(e.target.value || null)}
        className="w-full border rounded-md px-3 py-2 text-sm bg-white"
      >
        <option value="">Select a variant</option>
        {variants.map((v) => (
          <option key={v.sku} value={v.sku} disabled={!v.is_available}>
            {v.variant_name} — RS {v.price.toFixed(2)}
            {!v.is_available ? " (Out of Stock)" : ""}
          </option>
        ))}
      </select>

      {activeVariant && (
        <div className="mt-2 text-xs text-text-secondary space-y-0.5">
          <p>SKU: {activeVariant.sku}</p>
          {activeVariant.weight_kg && (
            <p>Weight: {activeVariant.weight_kg} kg</p>
          )}
          <p>
            Stock:{" "}
            <span
              className={
                activeVariant.stock_quantity > 0
                  ? "text-green-600"
                  : "text-red-500"
              }
            >
              {activeVariant.stock_quantity > 0
                ? `${activeVariant.stock_quantity} available`
                : "Out of stock"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};
