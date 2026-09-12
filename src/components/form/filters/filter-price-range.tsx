"use client";

import {
  Control,
  Controller,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterPriceRangeProps<T extends FieldValues> {
  control: Control<T>;
  register: UseFormRegister<T>;
  minName: Path<T>;
  maxName: Path<T>;
  min: number;
  max: number;
  step?: number;
  currency?: string;
  locale?: string;
  presets?: { label: string; min: number; max: number }[];
  className?: string;
}

export function FilterPriceRange<T extends FieldValues>({
  control,
  register,
  minName,
  maxName,
  min,
  max,
  step = 1000,
  currency = "NPR",
  locale = "en-IN",
  presets,
  className,
}: FilterPriceRangeProps<T>) {
  return (
    <Controller
      control={control}
      name={minName}
      render={({ field: minField }) => (
        <Controller
          control={control}
          name={maxName}
          render={({ field: maxField }) => {
            const minVal = Number(minField.value);
            const maxVal = Number(maxField.value);

            const fmt = (n: number) =>
              `${currency} ${n.toLocaleString(locale)}`;

            const handleSlider = (value: number | readonly number[]) => {
              const values = Array.isArray(value) ? value : [value];
              minField.onChange(values[0]);
              maxField.onChange(values[1] ?? values[0]);
            };

            return (
              <div className={cn("flex flex-col gap-4", className)}>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {fmt(minVal)}
                  </span>
                  <span className="font-medium text-foreground">
                    {fmt(maxVal)}
                  </span>
                </div>

                <Slider
                  min={min}
                  max={max}
                  step={step}
                  value={[minVal, maxVal]}
                  onValueChange={handleSlider}
                  aria-label="Price range"
                  className={cn(
                    "[&_[data-slot=slider-range]]:bg-blue-500",
                    "[&_[data-slot=slider-thumb]]:border-blue-500",
                  )}
                />

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor={String(minName)}
                      className="text-xs text-muted-foreground"
                    >
                      Min
                    </Label>
                    <Input
                      id={String(minName)}
                      type="number"
                      min={min}
                      max={max}
                      step={step}
                      {...register(minName, { valueAsNumber: true })}
                      placeholder={String(min)}
                      className="focus-visible:ring-blue-500"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor={String(maxName)}
                      className="text-xs text-muted-foreground"
                    >
                      Max
                    </Label>
                    <Input
                      id={String(maxName)}
                      type="number"
                      min={min}
                      max={max}
                      step={step}
                      {...register(maxName, { valueAsNumber: true })}
                      placeholder={String(max)}
                      className="focus-visible:ring-blue-500"
                    />
                  </div>
                </div>

                {presets && presets.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {presets.map((p) => {
                      const active = minVal === p.min && maxVal === p.max;
                      return (
                        <Button
                          key={p.label}
                          type="button"
                          size="sm"
                          variant={active ? "default" : "outline"}
                          onClick={() => {
                            minField.onChange(p.min);
                            maxField.onChange(p.max);
                          }}
                          className={cn(
                            "h-7 px-3 text-xs",
                            active &&
                              "bg-blue-500 hover:bg-blue-600 text-white",
                          )}
                        >
                          {p.label}
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }}
        />
      )}
    />
  );
}
