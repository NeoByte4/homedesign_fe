"use client";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { IColorOption } from "@/src/types/generic";
import { ColorSwatchGroup } from "./color-swatch";

interface FilterColorListProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options: IColorOption[];
  className?: string;
}

export function FilterColorList<T extends FieldValues>({
  control,
  name,
  options,
  className = "grid grid-cols-4 sm:grid-cols-5 gap-3 max-h-60 overflow-y-auto pr-1 py-1",
}: FilterColorListProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <ColorSwatchGroup
            options={options}
            value={(field.value as string[] | undefined) ?? []}
            onValueChange={field.onChange}
            className={className}
          />
        );
      }}
    />
  );
}
