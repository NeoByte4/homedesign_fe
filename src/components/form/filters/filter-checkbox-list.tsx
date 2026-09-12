"use client";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterCheckboxListProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options: string[];
  className?: string;
}

export function FilterCheckboxList<T extends FieldValues>({
  control,
  name,
  options,
  className = "grid grid-cols-2 gap-2 max-h-52 overflow-y-auto pr-1",
}: FilterCheckboxListProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const value = (field.value as string[] | undefined) ?? [];
        return (
          <div className={className}>
            {options.map((option) => {
              const checked = value.includes(option);
              return (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer text-sm"
                >
                  <Checkbox
                    checked={checked}
                    onCheckedChange={(isChecked) => {
                      const next = isChecked
                        ? [...value, option]
                        : value.filter((v) => v !== option);
                      field.onChange(next);
                    }}
                  />
                  <span className="truncate">{option}</span>
                </label>
              );
            })}
          </div>
        );
      }}
    />
  );
}
