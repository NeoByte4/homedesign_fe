"use client";

import { Minus, Plus } from "lucide-react";

interface QuantityPickerProps {
  quantity: number;
  max?: number;
  onChange: (qty: number) => void;
}

export const QuantityPicker = ({
  quantity,
  max = 99,
  onChange,
}: QuantityPickerProps) => (
  <div className="flex items-center gap-3">
    <span className="text-sm font-medium">Qty:</span>
    <div className="flex items-center border rounded-md">
      <button
        onClick={() => onChange(Math.max(1, quantity - 1))}
        className="px-2 py-1 hover:bg-muted/50"
      >
        <Minus size={14} />
      </button>
      <span className="px-4 py-1 text-sm font-medium border-x">{quantity}</span>
      <button
        onClick={() => onChange(Math.min(max || 99, quantity + 1))}
        className="px-2 py-1 hover:bg-muted/50"
      >
        <Plus size={14} />
      </button>
    </div>
  </div>
);
