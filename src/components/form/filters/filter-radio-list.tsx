"use client";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export interface RadioOption {
  value: string;
  label: string;
}

interface FilterRadioListProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options: RadioOption[];
  idPrefix: string;
  className?: string;
}

export function FilterRadioList<T extends FieldValues>({
  control,
  name,
  options,
  idPrefix,
  className = "grid grid-cols-2 gap-2",
}: FilterRadioListProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <RadioGroup
          value={(field.value as string) ?? ""}
          onValueChange={field.onChange}
          className={className}
        >
          {options.map((opt) => {
            const id = `${idPrefix}-${opt.value || "all"}`;
            return (
              <div key={opt.value} className="flex items-center gap-2">
                <RadioGroupItem value={opt.value} id={id} />
                <Label htmlFor={id} className="cursor-pointer text-sm">
                  {opt.label}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      )}
    />
  );
}
