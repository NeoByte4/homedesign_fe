"use client";

import { Check, Palette } from "lucide-react";
import type { IColorOption } from "@/src/types/generic";

interface ColorPickerProps {
  colors: IColorOption[];
  selected: string | null;
  onChange: (id: string | null) => void;
}

export const ColorPicker = ({
  colors,
  selected,
  onChange,
}: ColorPickerProps) => {
  if (!colors?.length) return null;

  const activeColor = colors.find((c) => c.id === selected);

  return (
    <div>
      <p className="text-sm font-semibold mb-2 flex items-center gap-1">
        <Palette size={14} />
        Available Colors
      </p>
      <div className="flex flex-wrap gap-2">
        {colors.map((c) => (
          <button
            key={c.id}
            title={c.name}
            onClick={() => onChange(selected === c.id ? null : c.id)}
            className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
              selected === c.id
                ? "border-blue-500 ring-2 ring-blue-200 scale-110"
                : "border-gray-300 hover:border-gray-400"
            }`}
            style={{ backgroundColor: c.color_code ?? "#ffffff" }}
          >
            {selected === c.id && (
              <Check size={14} className="text-white drop-shadow-md" />
            )}
          </button>
        ))}
      </div>
      {activeColor && (
        <p className="text-xs text-text-secondary mt-1">
          Selected: {activeColor.name}
        </p>
      )}
    </div>
  );
};
