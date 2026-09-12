"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import type { IColorOption } from "@/src/types/generic";
export type ColorSwatchSize = "sm" | "md" | "lg" | "xl";

const SIZE_MAP: Record<
  ColorSwatchSize,
  { circle: string; check: number; label: string }
> = {
  sm: { circle: "w-6 h-6", check: 12, label: "text-[10px] max-w-[52px]" },
  md: { circle: "w-8 h-8", check: 14, label: "text-[11px] max-w-[64px]" },
  lg: { circle: "w-10 h-10", check: 16, label: "text-xs max-w-[72px]" },
  xl: { circle: "w-12 h-12", check: 18, label: "text-sm max-w-[80px]" },
};

function isLightSwatch(swatch: string): boolean {
  const value = swatch.trim().toLowerCase();

  const hexMatch = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hexMatch) {
    const hex =
      hexMatch[1].length === 3
        ? hexMatch[1]
            .split("")
            .map((c) => c + c)
            .join("")
        : hexMatch[1];
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.7;
  }

  return /^(white|ivory|cream|beige|snow)$/.test(value);
}

function normalizeColorOptions(colors: IColorOption[]): IColorOption[] {
  const byName = new Map<string, IColorOption>();

  for (const c of colors) {
    if (!c?.name || !c.color_code || c.is_active === false) continue;
    if (byName.has(c.name)) continue;
    byName.set(c.name, c);
  }

  return [...byName.values()].sort(
    (a, b) => (a.sort_order ?? 999) - (b.sort_order ?? 999),
  );
}

interface ColorSwatchProps extends Omit<
  React.ComponentPropsWithoutRef<typeof ToggleGroupItem>,
  "value" | "children" | "size"
> {
  color: IColorOption;
  size?: ColorSwatchSize;
  showLabel?: boolean;
}

export const ColorSwatch = React.forwardRef<
  React.ElementRef<typeof ToggleGroupItem>,
  ColorSwatchProps
>(({ color, size = "md", showLabel = true, className, ...props }, ref) => {
  const s = SIZE_MAP[size];
  const swatch = color.color_code ?? "#000";
  const light = isLightSwatch(swatch);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <ToggleGroupItem
        ref={ref}
        value={color.name}
        aria-label={color.name}
        title={color.name}
        className={cn(
          "group relative rounded-full border p-0 min-w-0 shrink-0",
          "transition-all duration-150",
          "data-[state=off]:hover:ring-1 data-[state=off]:hover:ring-muted-foreground data-[state=off]:hover:ring-offset-1",
          "data-[state=on]:ring-2 data-[state=on]:ring-primary data-[state=on]:ring-offset-2",
          s.circle,
          className,
        )}
        style={{ backgroundColor: swatch }}
        {...props}
      >
        <Check
          size={s.check}
          strokeWidth={3}
          className={cn(
            "pointer-events-none opacity-0 transition-opacity",
            "group-data-[state=on]:opacity-100",
            light ? "text-black" : "text-white",
          )}
        />
      </ToggleGroupItem>

      {showLabel && (
        <span
          className={cn("truncate text-center text-muted-foreground", s.label)}
        >
          {color.name}
        </span>
      )}
    </div>
  );
});
ColorSwatch.displayName = "ColorSwatch";

export interface ColorSwatchGroupProps {
  options: IColorOption[];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (selectedNames: string[]) => void;
  showLabels?: boolean;
  size?: ColorSwatchSize;
  maxHeight?: string | "none";
  columnsClassName?: string;
  className?: string;
}

export function ColorSwatchGroup({
  options,
  value,
  defaultValue,
  onValueChange,
  showLabels = true,
  size = "md",
  maxHeight = "15rem",
  columnsClassName = "grid-cols-4 sm:grid-cols-5",
  className,
}: ColorSwatchGroupProps) {
  const normalized = React.useMemo(
    () => normalizeColorOptions(options),
    [options],
  );
  const [internalValue, setInternalValue] = React.useState<string[]>(
    defaultValue ?? [],
  );
  const isControlled = value !== undefined;
  const selected = value ?? internalValue;

  const containerClassName = cn("grid gap-3 pr-1", columnsClassName, className);
  const containerStyle =
    maxHeight !== "none"
      ? { maxHeight, overflowY: "auto" as const }
      : undefined;

  const handleChange = (next: string[]) => {
    if (!isControlled) setInternalValue(next);
    onValueChange?.(next);
  };

  return (
    <ToggleGroup
      multiple
      value={selected}
      onValueChange={handleChange}
      className={containerClassName}
      style={containerStyle}
    >
      {normalized.map((color) => (
        <ColorSwatch
          key={color.id ?? color.name}
          color={color}
          size={size}
          showLabel={showLabels}
        />
      ))}
    </ToggleGroup>
  );
}
